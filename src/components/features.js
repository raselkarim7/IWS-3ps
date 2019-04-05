const features = [
    {name: "MSSubClass", value: "", type: "dropdown", description: "Identifies the type of dwelling involved in the sale"},
    {name: "MSZoning", value: "", type: "dropdown", description: "Identifies the general zoning classification of the sale"},
    {name: "LotFrontage", value: "", type: "number", description: "Linear feet of street connected to property"},
    {name: "LotArea", value: "", type: "number", description: "Lot size in square feet"},
    {name: "Street", value: "", type: "dropdown", description: "Type of road access to property"},
    {name: "LotShape", value: "", type: "dropdown", description: "General shape of property"},
    {name: "LandContour", value: "", type: "dropdown", description: "Flatness of the property"},
    {name: "Utilities", value: "", type: "dropdown", description: "Type of utilities available"},
    {name: "LotConfig", value: "", type: "dropdown", description: "Lot configuration"},
    {name: "LandSlope", value: "", type: "dropdown", description: "Slope of property"},
    {name: "HouseStyle", value: "", type: "dropdown", description: "Style of dwelling"},
    {name: "OverallQual", value: "", type: "dropdown", description: "Rates the overall material and finish of the house"},
    {name: "OverallCond", value: "", type: "dropdown", description: "Rates the overall condition of the house"},
    {name: "YearBuilt", value: "", type: "date", description: "Original construction date"},
    {name: "YearRemodAdd", value: "", type: "date", description: "Remodel date (same as construction date if no remodeling or additions)"},
    {name: "ExterCond", value: "", type: "dropdown", description: "Evaluates the present condition of the material on the exterior"},
    {name: "Foundation", value: "", type: "dropdown", description: "Type of foundation"},
    {name: "GrLivArea", value: "", type: "number", description: "Above grade (ground) living area square feet"},
    {name: "FullBath", value: "", type: "number", description: "Full bathrooms above grade"},
    // {name: "BedroomAbvGr", value: "", type: "", description: ""}, 
    // {name: "KitchenAbvGr", value: "", type: "", description: ""},
    {name: "KitchenQual", value: "", type: "dropdown", description: "Kitchen quality"},
    {name: "TotRmsAbvGrd", value: "", type: "number", description: "Total rooms above grade (does not include bathrooms)"},
    {name: "GarageCars", value: "", type: "number", description: "Size of garage in car capacity"},
    {name: "GarageArea", value: "", type: "number", description: "Size of garage in square feet"},
    {name: "GarageCond", value: "", type: "dropdown", description: "Garage condition"},
    {name: "SaleCondition", value: "", type: "dropdown", description: "Condition of sale"},
];

export default features;