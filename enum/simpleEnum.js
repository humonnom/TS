var Simple;
(function (Simple) {
    Simple[Simple["Loading"] = 3] = "Loading";
    Simple[Simple["Done"] = 6] = "Done";
    Simple[Simple["Unknown"] = 7] = "Unknown";
})(Simple || (Simple = {}));
(function (Simple) {
    Simple[Simple["ADD"] = 0] = "ADD";
})(Simple || (Simple = {}));
console.log(Simple.Loading);
console.log(0 /* ConstSimple.Loading */);
