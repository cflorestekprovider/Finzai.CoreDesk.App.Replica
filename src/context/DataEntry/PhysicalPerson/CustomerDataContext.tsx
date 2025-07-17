import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AddressState, GeneralDataInitialState, GeneralDataState, ExpenseState, ReferenceState } from '../../../reducers/InitialStates/PhysicalPersonState';
import { CustomerReducer } from '../../../reducers/DataEntry/PhysicalPerson/CustomerDataReducer';
import { formatDate } from '../../../utils/DatesUtils/DatesUtils';

type NodeKey = keyof GeneralDataState;

interface CustomerContextValue {

  state: GeneralDataState;
  setField: (key: string, value: any, node: NodeKey) => void;

  setCustomer: (customer: GeneralDataState) => void;
  setAddress: (address: any) => void;
  setAddresses: (address: any) => void;
  setExpense: (expense: any) => void;
  setExpenses: (address: any) => void;
  setReference: (reference: any) => void;
  setReferences: (reference: any) => void;
  setJob: (job: any) => void;
  setJobs: (job: any) => void;
  resetCustomer: () => void;
  setPhones: (phones: any) => void;
  setDependents: (dependents: any) => void;
  setEmails: (emails: any) => void;
  setIdentifications: (identifications: any) => void;
}

const CustomerContext = createContext<CustomerContextValue | undefined>(undefined);


interface CustomerProviderProps {
  children: ReactNode;
}

export const CustomerContextProvider: React.FC<CustomerProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(CustomerReducer, GeneralDataInitialState);

  const setField = (key: string, value: any, node: NodeKey) => {
    dispatch({
      type: 'SET_FIELD',
      payload: {
        node,
        key,
        value
      }
    });
  };

  const setCustomer = (customer: GeneralDataState) => {
    const transformedIdentifications = customer.identifications?.map((id: any) => ({
      ...id,
      emisionDate: formatDate(id.emisionDate),
      expirationDate: formatDate(id.expirationDate),
    }));

    dispatch({
      type: 'SET_CUSTOMER',
      payload: {
        ...customer,
        customer: {
          ...customer.customer,
          birthDay: formatDate(customer.customer.birthDay)
        },
        identifications: transformedIdentifications,
      }
    });
  }

  const setAddress = (address: AddressState) => {
    dispatch({
      type: 'SET_ADDRESS',
      payload: {
        ...address,
        livingSinceDate:formatDate(address.livingSinceDate)
      }
    });
  }
  const setAddresses = (newAddresses: any | any[]) => {
    const addressesToAdd = Array.isArray(newAddresses) ? newAddresses : [newAddresses];

    const mergedAddresses = [
      // Elimina duplicados por id
      ...state.addresses.filter(
        existing => !addressesToAdd.some(newAddr => newAddr.id && newAddr.id === existing.id)
      ),
      ...addressesToAdd
    ];

    dispatch({
      type: 'SET_ADDRESSES',
      payload: mergedAddresses
    });
  };

  const setExpense = (expense: ExpenseState) => {
    dispatch({
      type: 'SET_EXPENSE',
      payload: {
        ...expense
      }
    });
  }

  const setExpenses = (newExpenses: any | any[]) => {
    const expensesToAdd = Array.isArray(newExpenses) ? newExpenses : [newExpenses];

    const mergedExpenses = [
      // Elimina duplicados por id
      ...state.expenses.filter(
        existing => !expensesToAdd.some(newExpen => newExpen.id && newExpen.id === existing.id)
      ),
      ...expensesToAdd
    ];

    dispatch({
      type: 'SET_EXPENSES',
      payload: mergedExpenses
    });
  };


    const setReference = (reference: ReferenceState) => {
    dispatch({
      type: 'SET_REFERENCE',
      payload: {
        ...reference
      }
    });
  }

  const setReferences = (newReferences: any | any[]) => {
    const referensesToAdd = Array.isArray(newReferences) ? newReferences : [newReferences];

    const mergedReferenses = [
      // Elimina duplicados por id
      ...state.references.filter(
        existing => !referensesToAdd.some(newRefer => newRefer.id && newRefer.id === existing.id)
      ),
      ...referensesToAdd
    ];

    dispatch({
      type: 'SET_REFERENCES',
      payload: mergedReferenses
    });
  };

  const setJob = (job: GeneralDataState) => {
    dispatch({
      type: 'SET_JOB',
      payload: job
    });
  }
  const setJobs = (newJobs: any | any[]) => {
    const jobsToAdd = Array.isArray(newJobs) ? newJobs : [newJobs];

    const mergedJobs = [
      // Elimina duplicados por id
      ...state.jobs.filter(
        (existing: any) => !jobsToAdd.some(newJob => newJob.id && newJob.id === existing.id)
      ),
      ...jobsToAdd
    ];

    dispatch({
      type: 'SET_JOBS',
      payload: mergedJobs
    });
  };

  const setPhones = (phones: any) => {
    dispatch({
      type: 'SET_PHONES',
      payload: phones
    });
  }

  const setDependents = (dependents: any) => {
    dispatch({
      type: 'SET_DEPENDENTS',
      payload: dependents
    });
  }

  const setEmails = (emails: any) => {
    dispatch({
      type: 'SET_EMAILS',
      payload: emails
    });
  }

  const setIdentifications = (identifications: any) => {
    dispatch({
      type: 'SET_IDENTIFICATIONS',
      payload: identifications
    });
  }

  const resetCustomer = () => {
    dispatch({
      type: 'RESET_FORM',
      payload: null
    });
  }

  return (
    <CustomerContext.Provider
      value={{
        state,
        setField,
        setCustomer,
        setAddress,
        setJob,
        setJobs,
        resetCustomer,
        setPhones,
        setDependents,
        setEmails,
        setIdentifications,
        setAddresses,
        setExpense,
        setExpenses,
        setReference,
        setReferences
      }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error('useCustomer must be used within a CustomerProvider');
  }
  return context;
};
