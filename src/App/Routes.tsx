import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from "../Components/Layout";
import routes from '../config/routes';

const _Routes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/blog"
          element={
            <Suspense fallback={<p>Loading..</p>}>
              <routes.blog.component />
            </Suspense>
          }
        />
        <Route
          path="/detail"
          element={
            <Suspense fallback={<p>Loading..</p>}>
              <routes.blogDetail.component />
            </Suspense>
          }
        />

        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<p>Loading..</p>}>
                <routes.home.component />
              </Suspense>
            }
          />
        </Route>
        <Route path="/quotes" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<p>Loading..</p>}>
                <routes.quotes.component />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default _Routes;


