const featuresKeyValue = { 
    MSSubClass: [
        { value: "20", text: "1-STORY 1946 & NEWER ALL STYLES" }, 
        { value: "30", text: "1-STORY 1945 & OLDER" }, 
        { value: "40", text: "1-STORY W/FINISHED ATTIC ALL AGES" }, 
        { value: "45", text: "1-1/2 STORY - UNFINISHED ALL AGES" }, 
        { value: "50", text: "1-1/2 STORY FINISHED ALL AGES" }, 
        { value: "60", text: "2-STORY 1946 & NEWER" }, 
        { value: "70", text: "2-STORY 1945 & OLDER" }, 
        { value: "75", text: "2-1/2 STORY ALL AGES" }, 
        { value: "80", text: "SPLIT OR MULTI-LEVEL" }, 
        { value: "85", text: "SPLIT FOYER" }, 
        { value: "90", text: "DUPLEX - ALL STYLES AND AGES" }, 
        { value: "120", text: "1-STORY PUD (Planned Unit Development) - 1946 & NEWER" }, 
        { value: "150", text: "1-1/2 STORY PUD - ALL AGES" }, 
        { value: "160", text: "2-STORY PUD - 1946 & NEWER" }, 
        { value: "180", text: "PUD - MULTILEVEL - INCL SPLIT LEV/FOYER" }, 
        { value: "190", text: "2 FAMILY CONVERSION - ALL STYLES AND AGES" }
    ],
    MSZoning: [
        { value: "A", text: "Agriculture" }, 
        { value: "C", text: "Commercial" }, 
        { value: "FV", text: "Floating Village Residential" }, 
        { value: "I", text: "Industrial" }, 
        { value: "RH", text: "Residential High Density" }, 
        { value: "RL", text: "Residential Low Density" }, 
        { value: "RP", text: "Residential Low Density Park " }, 
        { value: "RM", text: "Residential Medium Density" }, 
    ],
    LotFrontage: [
        /* Linear feet of street connected to property */
    ],
    LotArea: [
        /* Lot size in square feet */
    ],
    Street: [
        { value: "Grvl", text: "Gravel " }, 
        { value: "Pave", text: "Paved" },     
    ],
    LotShape: [
        { value: "Reg", text: "Regular " }, 
        { value: "IR1", text: "Slightly irregular" }, 
        { value: "IR2", text: "Moderately Irregular" }, 
        { value: "IR3", text: "Irregular" }, 
    ],
    LandContour: [ /*--------- -------- CONFUSION --------- --------*/
        { value: "Lvl", text: "Near Flat/Level " }, 
        { value: "Bnk", text: "Banked - Quick and significant rise from street grade to building" }, 
        { value: "HLS", text: "Hillside - Significant slope from side to side" }, 
        { value: "Low", text: "Depression" },
    ],
    Utilities: [
        { value: "AllPub", text: "All public Utilities (E,G,W,& S) " }, 
        { value: "NoSewr", text: "Electricity, Gas, and Water (Septic Tank)" }, 
        { value: "NoSeWa", text: "Electricity and Gas Only" }, 
        { value: "ELO", text: "Electricity only" }, 
    ],
    LotConfig: [
        { value: "Inside", text: "Inside lot" }, 
        { value: "Corner", text: "Corner lot" }, 
        { value: "CulDSac", text: "Cul-de-sac" }, 
        { value: "FR2", text: "Frontage on 2 sides of property" }, 
        { value: "FR3", text: "Frontage on 3 sides of property" }, 
    ],
    LandSlope: [
        { value: "Gtl", text: "Gentle slope" }, 
        { value: "Mod", text: "Moderate Slope " }, 
        { value: "Sev", text: "Severe Slope" }, 
    ],
    HouseStyle: [
        { value: "1Story", text: "One story" }, 
        { value: "1.5Fin", text: "One and one-half story: 2nd level finished" }, 
        { value: "1.5Unf", text: "One and one-half story: 2nd level unfinished" }, 
        { value: "2Story", text: "Two story" }, 
        { value: "2.5Fin", text: "Two and one-half story: 2nd level finished" }, 
        { value: "2.5Unf", text: "Two and one-half story: 2nd level unfinished" }, 
        { value: "SFoyer", text: "Split Foyer" }, 
        { value: "SLvl", text: "Split Level" },     
    ],
    OverallQual: [
        { value: "10", text: "Very Excellent" }, 
        { value: "9", text: "Excellent" }, 
        { value: "8", text: "Very Good" }, 
        { value: "7", text: "Good" }, 
        { value: "6", text: "Above Average" }, 
        { value: "5", text: "Average" }, 
        { value: "4", text: "Below Average" }, 
        { value: "3", text: "Fair" }, 
        { value: "2", text: "Poor" }, 
        { value: "1", text: "Very Poor" }, 
    ],
    OverallCond: [
        { value: "10", text: "Very Excellent" }, 
        { value: "9", text: "Excellent" }, 
        { value: "8", text: "Very Good" }, 
        { value: "7", text: "Good" }, 
        { value: "6", text: "Above Average " }, 
        { value: "5", text: "Average" }, 
        { value: "4", text: "Below Average " }, 
        { value: "3", text: "Fair" }, 
        { value: "2", text: "Poor" }, 
        { value: "1", text: "Very Poor" }, 
    ],
    YearBuilt: [
        /* Original construction date */    
    ],
    YearRemodAdd: [
        /* Remodel date (same as construction date if no remodeling or additions) */
    ],
    ExterCond: [
        { value: "Ex", text: "Excellent" }, 
        { value: "Gd", text: "Good" }, 
        { value: "TA", text: "Average/Typical" }, 
        { value: "Fa", text: "Fair" }, 
        { value: "Po", text: "Poor" }, 
    ],
    Foundation: [
        { value: "BrkTil", text: "Brick & Tile" }, 
        { value: "CBlock", text: "Cinder Block" }, 
        { value: "PConc", text: "Poured Contrete " }, 
        { value: "Slab", text: "Slab" }, 
        { value: "Stone", text: "Stone" }, 
        { value: "Wood", text: "Wood" }, 
    ],
    GrLivArea: [
        /*  Above grade (ground) living area square feet */
    ],
    FullBath: [
        /* Full bathrooms above grade */
    ],
    BedroomAbvGr: [
        /*--------- -------- CONFUSION --------- --------*/
    ],
    KitchenAbvGr: [
        /*--------- -------- CONFUSION --------- --------*/
    ],
    KitchenQual: [
        { value: "Ex", text: "Excellent" }, 
        { value: "Gd", text: "Good" }, 
        { value: "TA", text: "Typical/Average" }, 
        { value: "Fa", text: "Fair" }, 
        { value: "Po", text: "Poor" }, 
    ],
    TotRmsAbvGrd: [
        /* Total rooms above grade (does not include bathrooms) */
    ],
    GarageCars: [
        /* Size of garage in car capacity */
    ],
    GarageArea: [
        /* Size of garage in square feet */
    ],
    GarageCond: [
        { value: "Ex", text: "Excellent" }, 
        { value: "Gd", text: "Good" }, 
        { value: "TA", text: "Typical/Average" }, 
        { value: "Fa", text: "Fair" }, 
        { value: "Po", text: "Poor" }, 
        { value: "NA", text: "No Garage" },
    ],
    SaleCondition: [
        { value: "Normal", text: "Normal Sale" }, 
        { value: "Abnorml", text: "Abnormal Sale - trade, foreclosure, short sale" }, 
        { value: "AdjLand", text: "Adjoining Land Purchase" }, 
        { value: "Alloca", text: "Allocation - two linked properties with separate deeds, typically condo with a garage unit " }, 
        { value: "Family", text: "Sale between family members" }, 
        { value: "Partial", text: "Home was not completed when last assessed (associated with New Homes)" }, 
    ],
}

    export default featuresKeyValue;