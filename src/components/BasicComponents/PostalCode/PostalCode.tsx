import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CustomInput from '../CustomInput/CustomInput';
import { SearchIcon } from '../../../api/models/IconsModels/IconsModels';
import Input from '../Input/Input';
import SelectModel from '../../../api/models/SelectModel/SelectModel';
import Select from '../Select/Select';
import { GetPostalCodeDetail } from '../../../api/dataentry/physicalPerson/physicalPerson';
import { NeighborhoodToSelectModel } from '../../../utils/TransformSelect/TransformToSelectModel';
import { AddressState } from '../../../reducers/InitialStates/PhysicalPersonState';

interface PostalCodeProps {
    readonly?: boolean;
    readonlyButton?: boolean;
    address: AddressState;
    onAddressChange: (updatedAddress: Partial<AddressState>) => void;
}

const PostalCode: React.FC<PostalCodeProps> = ({
    readonly = false,
    readonlyButton = false,
    address,
    onAddressChange
}) => {
    const { t } = useTranslation();
    const [neighborhoodOptions, setNeighborhoodOptions] = useState<SelectModel[]>([]);
    const [lastSearchedPostalCode, setLastSearchedPostalCode] = useState<string>("");

    const [names, setNames] = useState({ stateName: "", municipalityName: "" })

    const handlePostalCodeSearch = async (postalCode: string) => {
        if (!postalCode || postalCode.length !== 5) {
            alert(t('messages.invalid_postal_code'));
            return;
        }

        try {
            const response = await GetPostalCodeDetail(Number(postalCode));
            if (response) {
                const detail = response.postalCodeDetail;

                onAddressChange({
                    postalCode: detail.postalCode,
                    stateName: detail.stateName,
                    stateId: detail.stateId?.toString(),
                    municipalityName: detail.municipalityName,
                    municipalityId: detail.municipalityId?.toString(),
                });

                setNames({ stateName: detail.stateName, municipalityName: detail.municipalityName })

                const neighborhoodsOptions = detail.neighborhoods
                    ? NeighborhoodToSelectModel(detail.neighborhoods)
                    : [];

                setNeighborhoodOptions(neighborhoodsOptions);
                setLastSearchedPostalCode(postalCode);
            }
        } catch (error) {
            console.error('Error al obtener detalles del código postal:', error);
        }
    };

    useEffect(() => {
        if (
            address?.postalCode &&
            address.postalCode.toString().length === 5 &&
            address.postalCode.toString() !== lastSearchedPostalCode
        ) {
            handlePostalCodeSearch(address.postalCode.toString());
        }
        if (address == undefined) {
            setNames({ stateName: "", municipalityName: "" })
            setLastSearchedPostalCode("")
        } else {
            if (address.id == null) {
                setNames({ stateName: "", municipalityName: "" })
                setLastSearchedPostalCode("")
            }
        }

    }, [address?.postalCode]);

    return (
        <>
            <CustomInput
                id="postalCode"
                classInput="col-12 col-md-6 col-lg-4 col-xl-3"
                required
                readonly={readonly}
                readonlyButton={readonlyButton}
                title={t('fields.postal_code')}
                value={address?.postalCode ?? ''}
                onChange={(e) =>
                    onAddressChange({
                        postalCode: e.target.value
                    })
                }
                icon={<SearchIcon />}
                onClick={() => handlePostalCodeSearch(address.postalCode ?? '')}
            />

            <Input
                id="statePostalCode"
                readonly
                required={false}
                title={t('fields.state')}
                placeholder={t('fields.state')}
                value={names?.stateName ?? ''}
                classInput="col-12 col-md-6 col-lg-4 col-xl-3"
            />

            <Input
                id="municipalyPostalCode"
                readonly
                required={false}
                title={t('fields.municipality')}
                placeholder={t('fields.municipality')}
                value={names.municipalityName ?? ''}
                classInput="col-12 col-md-6 col-lg-4 col-xl-3"
            />

            <Select
                id="colonyPostalCode"
                readonly={readonly}
                title={t('fields.colony')}
                required
                classInput="col-12 col-md-6 col-lg-4 col-xl-3"
                options={neighborhoodOptions}
                selectedValue={address?.neighborhoodId ?? ''}
                onChange={(e) => {
                    onAddressChange({
                        neighborhoodId: e.target.value
                    });
                }}
            />

            <Input
                id="addressStreet"
                readonly={readonly}
                required={false}
                title={t('fields.street')}
                placeholder={t('fields.street')}
                classInput="col-12 col-md-6 col-lg-4 col-xl-3"
                value={address?.street ?? ''}
                onChange={(e) => onAddressChange({ street: e.target.value })}
            />

            <Input
                id="addressExternalNumber"
                readonly={readonly}
                required={false}
                title={t('fields.external_number')}
                placeholder={t('fields.external_number')}
                classInput="col-12 col-md-6 col-lg-4 col-xl-3"
                value={address?.exteriorNumber ?? ''}
                onChange={(e) => onAddressChange({ exteriorNumber: e.target.value })}
            />

            <Input
                id="addressInternalNumber"
                readonly={readonly}
                required={false}
                title={t('fields.intern_number')}
                placeholder={t('fields.intern_number')}
                classInput="col-12 col-md-6 col-lg-4 col-xl-3"
                value={address?.interiorNumber ?? ''}
                onChange={(e) => onAddressChange({ interiorNumber: e.target.value })}
            />

            <Input
                id="addressCrossWith"
                readonly={readonly}
                required={false}
                title={t('fields.cross_with')}
                placeholder={t('fields.cross_with')}
                classInput="col-12 col-md-6 col-lg-4 col-xl-3"
                value={address?.crossStreet ?? ''}
                onChange={(e) => onAddressChange({ crossStreet: e.target.value })}
            />
        </>
    );
};

export default PostalCode;
