
const pythonMapValue = {
    MSSubClass:{
        '180': 1, '30': 2, '45': 2, '190': 3, '50': 3, '90': 3,
        '85': 4, '40': 4, '160': 4, '70': 5, '20': 5, '75': 5,
        '80': 5, '150': 5, '120': 6, '60': 6
    },
    MSZoning: {
        'A': 1, 'C':1, 'I':1, 'RP':1, 'RH': 2, 'RM': 2, 'RL': 3, 'FV': 4
    },
    Street: {
        Pave: 1, 'Grvl': 2
    },
    LotShape: {
        'Reg': 1, 'IR1': 2, 'IR2': 3, 'IR3': 4
    },
    LandContour: {
        'Lvl': 1, 'Bnk': 2, 'HLS': 3, 'Low': 4
    },
    Utilities: {
        'AllPub': 1, 'NoSewr': 2, 'NoSeWa': 3, 'ELO': 4
    },
    LotConfig: {
        'Inside': 1, 'Corner': 2, 'CulDSac': 3, 'FR2': 4, 'FR3': 5
    },
    LandSlope: {
        'Gtl': 1, 'Mod': 2, 'Sev': 3
    },
    HouseStyle: {
        "1Story": 1, '1.5Fin': 2, '1.5Unf': 3, '2Story': 4, '2.5Fin': 5, '2.5Unf': 6, 'SFoyer': 7, 'SLvl': 8
    },
    ExterCond: {
        'Ex': 1, 'Gd': 2, 'TA': 3, 'Fa': 4, 'Po': 5
    },
    Foundation:{
        'BrkTil': 1, 'CBlock': 2, 'PConc': 3, 'Slab': 4, 'Stone': 5, 'Wood': 6
    },
    KitchenQual: {
        'Ex': 1, 'Gd': 2, 'TA': 3, 'Fa': 4, 'Po': 5
    },
    GarageCond: {
        'Ex': 1, 'Gd': 2, 'TA': 3, 'Fa': 4, 'Po': 5, 'NA': 6
    },
    SaleCondition: {
        'Normal': 1, 'Abnorml': 2, 'AdjLand': 3, 'Alloca': 4, 'Family': 5, 'Partial': 6
    }
}

export default pythonMapValue;