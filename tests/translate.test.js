const { translate } = require("../src/translate");

describe(`translate function`, () => {
  test(`translate("apple") => 'appleway'`, () => {
    expect(translate("apple")).toBe("appleway");
  });
  test(`translate("else") => 'elseway'`, () => {
    expect(translate("else")).toBe("elseway");
  });
  test(`translate("index") => 'indexway'`, () => {
    expect(translate("index")).toBe("indexway");
  });
  test(`translate("oxygen") => 'oxygenway'`, () => {
    expect(translate("oxygen")).toBe("oxygenway");
  });
  test(`translate("umbrella") => 'umbrellaway'`, () => {
    expect(translate("oxygen")).toBe("oxygenway");
  });
  test(`translate("giraffe") => 'iraffegay'`, () => {
    expect(translate("giraffe")).toBe("iraffegay");
  });
  test(`translate("frog") => 'ogfray'`, () => {
    expect(translate("frog")).toBe("ogfray");
  });
  test(`translate("speed") => 'eedspay'`, () => {
    expect(translate("speed")).toBe("eedspay");
  });
  test(`translate("spray") => 'ayspray'`, () => {
    expect(translate("spray")).toBe("ayspray");
  });
  test(`translate("HELLO") => 'ELLOHAY'`, () => {
    expect(translate("HELLO")).toBe("ELLOHAY");
  });
  test(`translate("can't") => 'an'tcay'`, () => {
    expect(translate("can't")).toBe("an'tcay");
  });
  test(`translate("slither.io") => 'ither.ioslay'`, () => {
    expect(translate("slither.io")).toBe("ither.ioslay");
  });
  test(`translate("189") => '189'`, () => {
    expect(translate("189")).toBe("189");
  });
  test(`translate("hello@grandcircus.co") => 'hello@grandcircus.co'`, () => {
    expect(translate("hello@grandcircus.co")).toBe("hello@grandcircus.co");
  });
  test(`translate("Hello there") => 'elloHay erethay'`, () => {
    expect(translate("Hello there")).toBe("elloHay erethay");
  });
  test(`translate("Space") => 'aceSpay'`, () => {
    expect(translate("Space")).toBe("aceSpay");
  });
});
