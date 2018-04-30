import User from '@/views/user/User';
import RouteAbout from '@/views/routeManage/RouteAbout';

const routes = [
      {
        path:"/user",
        main:User
      },
      {
      	path:"/route/about",
      	main:RouteAbout
      }
];

export default routes;