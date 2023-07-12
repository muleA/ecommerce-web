import React from 'react';
import { useTranslation } from 'react-i18next';

const DashboardGreeting = (props:{userFullName:string}) => {
  const currentHour = new Date().getHours();
  const { i18n,t } = useTranslation();
  let greeting;

  if (currentHour < 12) {
    greeting = t('good_morning');
  } else if (currentHour < 18) {
    greeting = t('good_after_noon');
  } else {
    greeting = t('good_evening');
  }

  return (
    <>
    <h1 >{greeting}<span className='text-primary'> {`${props?.userFullName}`},</span>  {t('welcome')}</h1>

    </>
)}
export default DashboardGreeting;