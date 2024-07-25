const issuerEndpoint = 'https://cm-keycloak.cloud.iai.kit.edu/realms/BestRentalApp';
export const commonEnv = {
  oidc: {
    issuer_endpoint: issuerEndpoint,

    signup_endpoint: issuerEndpoint + '/protocol/openid-connect/registrations',

    authorization_endpoint: issuerEndpoint + '/protocol/openid-connect/auth',

    user_self_management_endpoint: issuerEndpoint + '/account',

    client_id: 'best-rental-app-oc-v2.0',

    scope: 'openid profile email',
  },
  pages: {
    login_page: 'login-page',
    landing_page: 'landing-page',
    car_addition: 'car-addition',
    fleet_overview: 'fleet-overview',
    list_car_rentals: 'list-car-rentals',
    available_cars_list: 'available-cars-list',
    rental_creation: 'rental-creation',
    rental_overview: 'rental-overview',
    fleets_overview: 'fleets-overview',
    fleet_addition : 'fleet-addition',
    edit_fleet: 'edit-fleet',
  },
};
