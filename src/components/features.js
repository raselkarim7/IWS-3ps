const features = [
    {name: "MSSubClass", value: "",     type: "dropdown",   description: "Identifies the type of dwelling involved in the sale"},
    {name: "MSZoning", value: "",       type: "dropdown",     description: "Identifies the general zoning classification of the sale"},
    {name: "LotFrontage", value: "",    type: "number",   /*confusion*/  min: 21, max: 313,  description: "Linear feet of street connected to property"},
    {name: "LotArea", value: "",        type: "number", /*confusion*/  min: 1300, max: 215245.0,     description: "Lot size in square feet"},
    {name: "Street", value: "",         type: "dropdown",       description: "Type of road access to property"},
    {name: "LotShape", value: "",       type: "dropdown",     description: "General shape of property"},
    {name: "LandContour", value: "",    type: "dropdown",  description: "Flatness of the property"},
    {name: "Utilities", value: "",      type: "dropdown",    description: "Type of utilities available"},
    {name: "LotConfig", value: "",      type: "dropdown",    description: "Lot configuration"},
    {name: "LandSlope", value: "",      type: "dropdown",    description: "Slope of property"},
    {name: "HouseStyle", value: "",     type: "dropdown",   description: "Style of dwelling"},
    {name: "OverallQual", value: "",    type: "dropdown",  description: "Rates the overall material and finish of the house"},
    {name: "OverallCond", value: "",    type: "dropdown",  description: "Rates the overall condition of the house"},
    {name: "YearBuilt", value: "",      type: "number", /*ok*/  min: 1880, max: 2010,   description: "Original construction date"},
    {name: "YearRemodAdd", value: "",   type: "number", /*ok*/  min: 1950, max: 2010,   description: "Remodel date (same as construction date if no remodeling or additions)"},
    {name: "ExterCond", value: "",      type: "dropdown",    description: "Evaluates the present condition of the material on the exterior"},
    {name: "Foundation", value: "",     type: "dropdown",   description: "Type of foundation"},
    {name: "GrLivArea", value: "",      type: "number", /*confusion*/  min: 438, max: 5642, description: "Above grade (ground) living area square feet"},
    {name: "FullBath", value: "",       type: "number", /*ok*/  min: 0, max: 3,  description: "Full bathrooms above grade"},
    {name: "BedroomAbvGr", value: "",   type: "number", /*ok*/  min: 0, max: 6,  description: "Bed room above grade"}, 
    {name: "KitchenAbvGr", value: "",   type: "number", /*ok*/  min: 1, max: 3,  description: "Kitchen above grade"},
    {name: "KitchenQual", value: "",    type: "dropdown",  description: "Kitchen quality"},
    {name: "TotRmsAbvGrd", value: "",   type: "number",  /*confusion*/  min: 3, max: 12, description: "Total rooms above grade (does not include bathrooms)"},
    {name: "GarageCars", value: "",     type: "number",  /*ok*/  min: 1, max: 4,   description: "Size of garage in car capacity"},
    {name: "GarageArea", value: "",     type: "number",  /*confusion*/  min: 160, max: 1418, description: "Size of garage in square feet"},
    {name: "GarageCond", value: "",     type: "dropdown",   description: "Garage condition"},
    {name: "SaleCondition", value: "",  type: "dropdown", description: "Condition of sale"},
];

export default features;