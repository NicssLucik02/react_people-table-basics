import { Navigate, Route, Routes } from 'react-router-dom';
import { PeopleHomePage } from '../PeopleHomePage';
import { NotFoundPage } from '../NotFoundPage';
import { PeopleTablePage } from '../PeopleTable/PeopleTablePage';

export const PeopleRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PeopleHomePage />} />
      <Route path="/people" element={<PeopleTablePage />} />
      <Route path="/people/:slug" element={<PeopleTablePage />} />

      <Route path="/home" element={<Navigate to="/" replace />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
