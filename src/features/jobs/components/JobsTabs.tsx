import { Tabs } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';

export const JobsTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentTab = location.pathname.includes('moscow')
    ? 'moscow'
    : 'petersburg';

  return (
    <Tabs
      value={currentTab}
      onChange={(value) => navigate(`/vacancies/${value}`)}
      variant="pills"
      radius="md"
      color="blue"
      mb="xl"
    >
      <Tabs.List>
        <Tabs.Tab value="moscow">Москва</Tabs.Tab>
        <Tabs.Tab value="petersburg">Санкт‑Петербург</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};
