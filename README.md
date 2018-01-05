# transform-csv
Reads a large csv file in a streamed manner, transforms every row as needed and writes it to a new file.
The example `transformRow` operation replaces `"ObjectId("someid")"` obtained in a mongoexport with `"someid"`