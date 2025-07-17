export interface CreditlinePayload {
    tenantId: string;
    id: string;
    name: string;
    code: string;
    productId: number;
    portfolioTypeId: number;
    fixedAmount?: number;
    minimumAmount?: number;
    maximumAmount?: number;
    interestTypeId: number;
    currencyId: number;
    customerTypeId: number;
    interestRate: number;
    validFrom: string;
    validUntil: string;
    isMultiDisbursement: boolean;
    isActive: boolean;
}