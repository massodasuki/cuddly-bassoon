// Module configuration for major/api refactoring
// This file provides an overview of all modules and their groupings

export interface ModuleConfig {
  name: string;
  description: string;
  dependencies: string[];
  exports: string[];
  category: 'core' | 'vessels' | 'profiles' | 'utilities';
}

export const MODULES_CONFIG: Record<string, ModuleConfig> = {
  // Core Modules
  auth: {
    name: 'AuthModule',
    description: 'Handles authentication, JWT tokens, and user login/logout',
    dependencies: ['users'],
    exports: ['AuthService', 'JwtStrategy', 'JwtRefreshStrategy'],
    category: 'core'
  },
  users: {
    name: 'UsersModule', 
    description: 'Manages user entities, profiles, and user operations',
    dependencies: [],
    exports: ['UsersService'],
    category: 'core'
  },
  fcm: {
    name: 'FcmModule',
    description: 'Firebase Cloud Messaging for push notifications',
    dependencies: ['device-registration'],
    exports: ['FcmService'],
    category: 'core'
  },

  // Vessel Modules
  vessels: {
    name: 'VesselsModule',
    description: 'Core vessel management functionality',
    dependencies: [],
    exports: ['VesselsService'],
    category: 'vessels'
  },
  'vessel-details': {
    name: 'VesselDetailsModule',
    description: 'Detailed vessel information and related entities',
    dependencies: ['vessels', 'profile-pentadbir-hartas', 'kulit', 'enjin', 'kesalahan', 'jetties', 'kru', 'pemilikan', 'pematuhan', 'pendaftaran-antarabangsa', 'cm-equipment'],
    exports: ['VesselDetailsService'],
    category: 'vessels'
  },
  'vessel-listing': {
    name: 'VesselListingModule',
    description: 'Combined vessel listing functionality for Darat and regular vessels',
    dependencies: ['vessels', 'darat-vessels'],
    exports: ['VesselListingService'],
    category: 'vessels'
  },

  // Profile Modules
  'profile-user-details': {
    name: 'ProfileUserDetailsModule',
    description: 'User profile details with comprehensive user information',
    dependencies: ['profile-users', 'vessels', 'profile-user-vessel', 'profile-pengusaha-skls', 'application-v2-profile-user', 'jetties', 'rivers', 'kesalahan', 'parliaments', 'parliament-seats', 'fishing-log-nds', 'catching-location-nds', 'kulit', 'enjin'],
    exports: ['ProfileUserDetailsService'],
    category: 'profiles'
  },

  // Utility Modules
  common: {
    name: 'CommonModule',
    description: 'Shared utilities, DTOs, and common functionality',
    dependencies: [],
    exports: ['PaginationQueryDto'],
    category: 'utilities'
  }
};

export const MODULE_GROUPS = {
  core: ['auth', 'users', 'fcm'],
  vessels: ['vessels', 'vessel-details', 'vessel-listing'],
  profiles: ['profile-user-details'],
  utilities: ['common']
};

export const getModulesByCategory = (category: ModuleConfig['category']): string[] => {
  return Object.entries(MODULES_CONFIG)
    .filter(([_, config]) => config.category === category)
    .map(([name, _]) => name);
};