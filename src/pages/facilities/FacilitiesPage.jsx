import ContentContainer from '@/components/common/ContentContainer';
import PageTitle from '@/components/common/PageTitle';
import { useState } from 'react';
import * as S from '@/pages/facilities/styles';
import RestroomSection from '@/pages/facilities/RestroomSection';
import MedicalSection from '@/pages/facilities/MedicalSection';
import LostAndFoundSection from '@/pages/facilities/LostAndFoundSection';
import { useTranslation } from 'react-i18next';

const FacilitiesPage = () => {
  const [selectedFacility, setSelectedFacility] = useState('restroom');
  const { t } = useTranslation();

  const handleToggleClick = (facility) => {
    setSelectedFacility(facility);
  };

  return (
    <>
      <S.FacilitiesLayout>
        <PageTitle title={t('facilities.amenities')} />
        <S.ToggleWrapper>
          <ContentContainer>
            <S.Toggle>
              <S.RestroomBtn $isActive={selectedFacility === 'restroom'} onClick={() => handleToggleClick('restroom')}>
                {t('facilities.restroomToggle')}
              </S.RestroomBtn>
              <S.MedicalBtn $isActive={selectedFacility === 'medical'} onClick={() => handleToggleClick('medical')}>
                {t('facilities.medicalFacilityToggle')}
              </S.MedicalBtn>
              <S.LostAndFoundBtn
                $isActive={selectedFacility === 'lostAndFound'}
                onClick={() => handleToggleClick('lostAndFound')}
              >
                {t('facilities.lostAndFoundCenterToggle')}
              </S.LostAndFoundBtn>
            </S.Toggle>
          </ContentContainer>
        </S.ToggleWrapper>
        {selectedFacility === 'restroom' && <RestroomSection />}
        {selectedFacility === 'medical' && <MedicalSection />}
        {selectedFacility === 'lostAndFound' && <LostAndFoundSection />}
      </S.FacilitiesLayout>
    </>
  );
};

export default FacilitiesPage;
