module User_Code_Low(b0I,b1I,b2I,b3I,b4I,b5I,b6I,b7I,b8I,b9I,b10I,b11I,b12I,b13I,b14I,b15I);

output [15:0] b0I;
output [15:0] b1I;
output [15:0] b2I;
output [15:0] b3I;
output [15:0] b4I;
output [15:0] b5I;
output [15:0] b6I;
output [15:0] b7I;
output [15:0] b8I;
output [15:0] b9I;
output [15:0] b10I;
output [15:0] b11I;
output [15:0] b12I;
output [15:0] b13I;
output [15:0] b14I;
output [15:0] b15I;

assign b0I[15:0] = 16'b0011_00_00_00000000;
assign b1I[15:0] = 16'b1000_11_00_00001000;
assign b2I[15:0] = 16'b0011_01_00_00000000;
assign b3I[15:0] = 16'b1101_00_11_00000000;
assign b4I[15:0] = 16'b1111_00_11_00001110;
assign b5I[15:0] = 16'b1000_11_00_00001000;
assign b6I[15:0] = 16'b0110_11_00_00000000;
assign b7I[15:0] = 16'b1101_01_11_00000000;
assign b8I[15:0] = 16'b1111_00_11_00001000;
assign b9I[15:0] = 16'b1001_10_01_00000000;
assign b10I[15:0] = 16'b1001_11_01_00000001;
assign b11I[15:0] = 16'b1101_11_10_00000000;
assign b12I[15:0] = 16'b1111_00_11_00000010;
assign b13I[15:0] = 16'b1011_11_01_00000000;
assign b14I[15:0] = 16'b1011_10_01_00000001;
assign b15I[15:0] = 16'b0101_01_00_00000001;
endmodule
