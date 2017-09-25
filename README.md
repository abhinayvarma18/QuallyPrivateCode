# TestingCode
Questions_  
# Value.js
Implement string to decimal converter without using any prebuilt functions/classes that do any sort of string to number conversion automatically.
#Examples:
- “2.345” should become 2.345
- “1” should become 1.0
- “-345.23” should become -345.23
- “asd32” should throw an error
- “2.334.4” should throw as error
- If the string input cannot be represented as a decimal value due to precision, overflow or underflow problems throw an error.

# Index.js

You are to implement a decompression algorithm given a compression algorithm.
The compression algorithm takes a sequence of characters (whitespace is ignored). To indicate that some sequence should be repeated, a marker is added to the file, like (5x3). To decompress this marker, take the subsequent 5 characters (which may include characters from another marker as well - see below) and repeat them 3 times. For example:

- HELLO becomes HELLO as there are no markers in this input.
- (3x3)ADF becomes ADFADFADF.
- S(7x2)(2x2)THCF becomes S(2x2)TH(2x2)THCF which then becomes STHTHTHTHCF.
- (18x9)(3x2)YTQ(5x7)ABABA decompresses into a string with length 369

IMPORTANT: The leftmost marker in the string must always be expanded first.

What is the decompressed length of the file using this format? The file is input.txt

Hint: Use recursion, and since the solution requires only the length of the decompressed file, we do not need to actually compute the entire decompressed file, we need only keep track of the length…


