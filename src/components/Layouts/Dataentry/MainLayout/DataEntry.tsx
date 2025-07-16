import { useState } from 'react';
import TabsModelPF from '../../../../api/models/TabsModels/TabModelPF';
import TabsModelPM from '../../../../api/models/TabsModels/TabModelPM';
import PageHeader from '../../../PageHeader/PageHeader';
import Layout from './Layout';
import SearchPerson from '../SearchPerson/SearchPerson';

const DataEntry: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<{ type: string; name: string } | null>(null);

  const handleBackToSearch = () => {
    setSelectedPerson(null);
  };
  
  return (
    <div className="p-3">
      {selectedPerson ? (
        <div className="container-fluid bg-container-main no-width-restrictions">
          <PageHeader 
            title={'Persona ' + selectedPerson.type} 
            name={selectedPerson.name} 
            isButtonVisible={true}
            onBack={handleBackToSearch}
          />
        
          {selectedPerson.type === "fisica" ? (
            <div id="PF">
              <Layout items={TabsModelPF} />
            </div>
          ) : (
            <div id="PM">
              <Layout items={TabsModelPM} />
            </div>
          )}
        </div>
      ) : (
        <SearchPerson onSelectPerson={(person) => setSelectedPerson(person)} />
      )}
    </div>
  );
};

export default DataEntry;
