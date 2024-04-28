export interface Crop {
    soil_id: string;
    soil_type: string;
    soil_ph: number;
    organic_matter: number;
    nitrogen: number;
    phosphorus: number;
    potassium: number;
    
}
export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
  export interface InsertedSuccess {
    Result: any;
    lastRowid: String;
    rowsAffected: Number;
  }
  
  export interface Read {
    Result: []; // An array of Crop
  }
  
  export interface InsertResponse {
    errorNum?: number; // Optional property, use the actual type for errorNum if available
    // Add other properties as needed based on the actual response structureexport interface Read {Result: [];}
  }
  