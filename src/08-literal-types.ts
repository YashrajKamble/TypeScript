// string literals types
let direction: "north" | "east" | "west" | "south";
direction = "east";

//numeric literal types
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;

// combining with other types
type SuccessResponse = {
  status: "success";
  data: any;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;
