import { Route, Routes } from 'react-router-dom';

import { LoginStepper, RegisterStepper } from '@/features';
import {
  AddDocument,
  Documents,
  FirstScrean,
  People,
  PreviewScreen,
  Setings,
  SetingsLanguage,
} from '@/pages';
import { MainLayout } from '../../layout/mainLayout/MainLayout';
import { Chatlayout } from '../../layout/chatLayout/ChatLayout';

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/previe" element={<PreviewScreen />} />
        <Route path="/register" element={<RegisterStepper />} />
        <Route path="/login" element={<LoginStepper />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<FirstScrean />} />
          <Route path="setings" element={<Setings />} />
          <Route path="setings/language" element={<SetingsLanguage />} />
          <Route path="documents" element={<Documents />} />
          <Route path="people" element={<People />} />
        </Route>
        <Route path="/chat" element={<Chatlayout />} />
        <Route path="/add-document" element={<AddDocument />} />
      </Routes>
    </div>
  );
};
