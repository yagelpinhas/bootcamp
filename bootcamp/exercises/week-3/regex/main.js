var str = "interesting";
if (/in[a-z]*ing/i.test(str)) {
    console.log("true")
}

var prefix = "a",
    suffix = "at",
    re = new RegExp(prefix + "[a-z]*" + suffix, "i");
if (re.prototype.test("Interesting")) {
    // we have a match
    console.log("true")
}
else{
    console.log("false")
}