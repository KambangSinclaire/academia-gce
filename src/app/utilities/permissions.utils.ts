import allPermissions from './allPermissions.utils';

const userPermissions:any = {};
function scanAndSetUserPermissions(permissions: any[]) {
  permissions.forEach((permission) => {
    // userPermissions[permission] =
    //   allPermissions[permission] === permission ? true : false;
  });
  return userPermissions;
}

export default scanAndSetUserPermissions;
