let viewgird = [
    {
        path: '/Sys_Log',
        name: 'sys_Log',
        component: () => import('@/views/system/Sys_Log.vue')
    }
    , {
        path: '/Sys_User',
        name: 'Sys_User',
        component: () => import('@/views/system/Sys_User.vue')
    }, {
        path: '/Sys_Dictionary',
        name: 'Sys_Dictionary',
        component: () => import('@/views/system/Sys_Dictionary.vue')
    }, {
        path: '/Sys_Role',
        name: 'Sys_Role',
        component: () => import('@/views/system/Sys_Role.vue')
    }
    , {
        path: '/Sys_DictionaryList',
        name: 'Sys_DictionaryList',
        component: () => import('@/views/system/Sys_DictionaryList.vue')
    }, {
        path: '/Department',
        name: 'Department',
        component: () => import('@/views/business/Department.vue'),
        meta: {
            keepAlive: false
        }
    }, {
        path: '/Tenant',
        name: 'Tenant',
        component: () => import('@/views/business/Tenant.vue'),
        meta: {
            keepAlive: false
        }
    }, {
        path: '/House',
        name: 'House',
        component: () => import('@/views/business/House.vue'),
        meta: {
            keepAlive: false
        }
    }, {
        path: '/Vtenanthouserelation',
        name: 'Vtenanthouserelation',
        component: () => import('@/views/business/Vtenanthouserelation.vue'),
        meta: {
            keepAlive: false
        }
    }, {
        path: '/TenantHouseRelation',
        name: 'TenantHouseRelation',
        component: () => import('@/views/business/TenantHouseRelation.vue'),
        meta: {
            keepAlive: false
        }
    }, {
        path: '/TenantFee',
        name: 'TenantFee',
        component: () => import('@/views/business/TenantFee.vue')
    }, {
        path: '/TenantFeeRecord',
        name: 'TenantFeeRecord',
        component: () => import('@/views/business/TenantFeeRecord.vue')
    }, {
        path: '/monthRentReport',
        name: 'monthRentReport',
        component: () => import('@/views/business/MonthRentReport.vue')
    }, {
        path: '/InputDetailReport',
        name: 'inputDetailReport',
        component: () => import('@/views/business/InputDetailReport.vue')
    }, {
        path: '/tenantsRentReport',
        name: 'tenantsRentReport',
        component: () => import('@/views/business/TenantsRentReport.vue')
    }]
export default viewgird
