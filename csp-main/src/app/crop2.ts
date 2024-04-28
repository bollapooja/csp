
export interface Crop2 {
    crop_type: string;
    market_demand: string;
    cost_management: string;
    climate: string;
    profit: string;
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
      Result: [];
  }
  export interface InsertResponse {
    errorNum?: number; // Optional property, use the actual type for errorNum if available
    // Add other properties as needed based on the actual response structure
  }
  