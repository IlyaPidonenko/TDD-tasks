const {
    isAllCaps,
    countVowels,
    mergeAndSortArrays,
    findDuplicates,
  } = require("./tdd_own_test_cases");
  
  describe("checking format", () => {
    test("looks if a string contains only CAPS positive", () => {
      expect(isAllCaps("HALLO")).toBe(true);
    });
    test("looks if a string contains only CAPS negative", () => {
        expect(isAllCaps("HALlo")).toBe(false);
      });
  });
  describe("counting tests", () => {
    test("counts the vowels in a string", () => {
      expect(countVowels("HALLO")).toBe(2);
    });
    test("counts the duplicates in an array", () => {
        testArray = [1, 1, 2, 3, 3, 4, 5, 6, 5];
        expect(findDuplicates("HALLO")).toBe(2);
      });
  });
  describe("array merging", () => {
    test("merges two arrays in one", () => {
        firstTestArray = [2, 1];
        secondTestArray = [4, 3];
      expect(mergeAndSortArrays(firstTestArray, secondTestArray)).toBe([1, 2, 3, 4]);
    });
  });
 