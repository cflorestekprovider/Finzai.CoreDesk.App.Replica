
const toCamelCase = (str: string) =>
    str.charAt(0).toLowerCase() + str.slice(1);

const transformKeysToCamel = (data: any): any => {
    if (Array.isArray(data)) {
        return data.map(item => transformKeysToCamel(item));
    } else if (data !== null && typeof data === "object") {
        return Object.keys(data).reduce((acc, key) => {
            const camelKey = toCamelCase(key);
            acc[camelKey] = transformKeysToCamel(data[key]);
            return acc;
        }, {} as any);
    }
    return data;
};

const parseResponse = <T>(responseData: any): T => {
    if (typeof responseData === "string") {
        return transformKeysToCamel(JSON.parse(responseData)) as T;
    }

    return transformKeysToCamel(responseData) as T;
};

const request = async <T>(
    url: string,
    method: string,
    body?: unknown
): Promise<T | null> => {
    try {
       
        const config: RequestInit = {
            method
        };

        if (method === "POST" || method === "PUT") {
            config.headers = {
                "Content-Type": "application/json"
            };
            config.body = JSON.stringify(body);
        }
        const response = await fetch(url, config);

         if (!response.ok) {
            let logError = `HTTP error! Status: ${response.status}`;
            let errorMessage;
            try {
                const errorBody = await response.json();
                logError += ` - ${JSON.stringify(errorBody)}`;

                errorMessage = errorBody.errorMessage || "An error occurred";
                
                if (errorBody.errors) {
                    errorMessage += ` - ${Object.values(errorBody.errors).join(", ")}`;
                }
            } catch {
                logError += " - Unable to parse error response";
                errorMessage = "An error occurred";
            }

            console.error(logError);
            throw new Error(errorMessage);                      
        }

        const jsonResponse = await response.json();

            if(typeof jsonResponse === "string"){
                return jsonResponse as T;
               
            }
 
            const parsedData = parseResponse<T>(jsonResponse);
            return parsedData;
       

    } catch (error) {
        console.error("Request failed:", error);
        throw error;
    }
};

export const get = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type");

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    if (contentType && contentType.includes("application/json")) {
        return await response.json();
    } else {
        const text = await response.text();
        console.error("Invalid response (expected JSON):", text.slice(0, 100));
        throw new Error("Invalid response format. Expected JSON but received HTML.");
    }
};

export const post = async <TRequest, TResponse>(
    url: string,
    requestBody: TRequest
) => request<TResponse>(url, "POST", requestBody);

export const put = async <TRequest, TResponse>(
    url: string,
    requestBody: TRequest
) => request<TResponse>(url, "PUT", requestBody);
