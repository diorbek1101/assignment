import React from 'react';
import { Navigate, Route, Routes as Switch } from 'react-router-dom';

import { Home, Contact, Webxizmat, Buyurtma } from '../pages';
import { Auth } from 'layouts';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/rate" element={<Webxizmat />} />
      <Route path="/about" element={<Buyurtma />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/buyurtma" element={<Auth children={undefined} />} />
      <Route index path="*" element={<Navigate to="/" />} />
    </Switch>
  );
};
export default Routes;
