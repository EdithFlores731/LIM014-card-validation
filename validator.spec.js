// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import {isValid, maskify} from '../src/validator.js'

/*describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });*/

  describe('isValid', () => {
    it('debería ser una función', () => {
      expect(typeof isValid).toBe('function');
    });

    it('debería retornar true para "4083952015263"', () => {
      expect(isValid("4083952015263")).toBe(true);
    });

    it('debería retornar true para "79927398713"', () => {
      expect(isValid("79927398713")).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(isValid("1234567890")).toBe(false);
    });
  });

  describe('maskify', () => {
    it('debería ser una función', () => {
      expect(typeof maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(maskify("4556364607935616")).toBe("############5616");
    });                                               

    it('Debería retornar "1" para "1"', () => {
      expect(maskify("1")).toBe("1");
    });  
    it('Debería retornar "######orld" para "helloworld"', () => {
      expect(maskify("helloworld")).toBe("######orld");
    });
  });

