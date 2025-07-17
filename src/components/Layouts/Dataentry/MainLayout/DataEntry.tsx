import { useEffect, useState } from 'react';
import TabsModelPF from '../../../../api/models/TabsModels/TabModelPF';
import TabsModelPM from '../../../../api/models/TabsModels/TabModelPM';
import PageHeader from '../../../PageHeader/PageHeader';
import Layout from './Layout';
import SearchPerson from '../SearchPerson/SearchPerson';
import { useCustomerContext } from '../../../../context/DataEntry/PhysicalPerson/CustomerDataContext';

const DataEntry: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<{ type: string; name: string, id:string } | null>(null);

  const { resetCustomer } = useCustomerContext();

  const handleBackToSearch = () => {
    setSelectedPerson(null);
    resetCustomer();
  };

  useEffect(() => {
    resetCustomer();
  }, [])

  return (
    <>
      {(selectedPerson && selectedPerson.type) ? (
        <>
          <PageHeader
            title={'Persona ' + selectedPerson.type}
            name={selectedPerson.name}
            isButtonVisible={true}
            onBack={handleBackToSearch}
          />

          {selectedPerson.type === "fisica" && <div id="PF"><Layout items={TabsModelPF} id={selectedPerson.id} personType={1} /></div>}  
          {selectedPerson.type === "moral" && <div id="PF"><Layout items={TabsModelPM} id={selectedPerson.id} personType={2} /></div>}  
       
        </>
      ) : (
        <SearchPerson onSelectPerson={(person) => setSelectedPerson(person)} />
      )}
    </>
  );
};

export default DataEntry;
