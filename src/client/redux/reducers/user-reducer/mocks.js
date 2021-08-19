import { SubscribeType } from '../../../../types/payments.ts';

export const mockInitialState = {
  loading: false,
  authenticated: false,
  protectionCase: {},
  userProfile: {},
  companyProfile: {},
};

export const mockProtectionCase = {
  OLD_STATE: { loading: true },
  PAYLOAD: { id: 1, text: `look this` },
  STATE: {
    loading: false,
    protectionCase: { id: 1, text: `look this` }
  }
};

export const mockSetUser = {
  OLD_STATE: {
    loading: true,
    authenticated: false,
    userProfile: {}
  },
  PAYLOAD: { userId: 1, text: `look at me` },
  STATE: {
    loading: false,
    authenticated: true,
    userProfile: { userId: 1, text: `look at me` }
  }
};

export const mockSetCompany = {
  OLD_STATE: {
    loading: true,
    authenticated: false,
    companyProfile: {}
  },
  PAYLOAD: { companyId: 1, text: `look my company` },
  STATE: {
    loading: false,
    authenticated: true,
    companyProfile: {companyId: 1, text: `look my company`}
  }
};

export const mockSetDemoAccess = {
  OLD_STATE: {
    companyProfile: {
      subscribes: {
        subscribe: { currentStatus: null }
      }
    }
  },
  STATE: {
    companyProfile: {
      subscribes: {
        subscribe: { currentStatus: SubscribeType.DEMO }
      }
    }
  }
};

export const mockUpdateCompanyPayers = {
  OLD_STATE: {
    companyProfile: {
      payers: {
        selected: 2,
        payers: [{ id: 1, text: `payer 1` }, { id: 2, text: `payer 2` }]
      }
    }
  },
  PAYLOAD: {
    selected: 5,
    payers: [{ id: 2, text: `payer 2` }, { id: 3, text: `look my payers` }],
  },
  STATE: {
    companyProfile: {
      payers: {
        selected: 5,
        payers: [{ id: 2, text: `payer 2` }, { id: 3, text: `look my payers` }]
      }
    }
  }
};

export const mockChangePayer = {
  OLD_STATE: {
    companyProfile: {
      payers: {
        selected: 2,
        payers: [{ id: 1, text: `payer 1` }, { id: 2, text: `payer 2` }]
      }
    }
  },
  PAYLOAD: 3,
  STATE: {
    companyProfile: {
      payers: {
        selected: 3,
        payers: [{ id: 1, text: `payer 1` }, { id: 2, text: `payer 2` }]
      }
    }
  }
};

export const mockDeletePayer = [
  {
    DESCRIPTION: `selected: 2, del: 2`,
    OLD_STATE: {
      companyProfile: {
        payers: {
          selected: 2,
          payers: [{ id: 1, text: `payer 1` }, { id: 2, text: `payer 2` }]
        }
      }
    },
    PAYLOAD: 2,
    STATE: {
      companyProfile: {
        payers: {
          selected: 1,
          payers: [{ id: 1, text: `payer 1` }]
        }
      }
    }
  }, {
    DESCRIPTION: `удаляем единствеенного плательщика, selected = 0`,
    OLD_STATE: {
      companyProfile: {
        payers: {
          selected: 2,
          payers: [{ id: 2, text: `payer 2` }]
        }
      }
    },
    PAYLOAD: 2,
    STATE: {
      companyProfile: {
        payers: {
          selected: 0,
          payers: []
        }
      }
    }
  }
];