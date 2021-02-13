import { ownerAdapter, repositoryAdapter, userAdapter } from '../adapter/adapters';
import { ArrayOperationsScheme, MapOperationsScheme, MathOperationsScheme } from '../scheme';
import { arrayOperationsTransform, mapOperationsTransform, mathOperationsTransform } from './transforms';

describe('JOIN MATH', () => {
  const data2021Model = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
    CurrentYear: 2021,
    BirthDate: 1995,
    DaysPerYear: 365,
    MonthsPerYear: 12,
    HoursPerDay: 24,
  };

  const mathOperations = mathOperationsTransform(data2021Model);

  test('sum', () => {
    expect(mathOperations.sum).toBe(data2021Model.DaysPerYear);
  });

  test('rest', () => {
    expect(mathOperations.rest).toBe(data2021Model.CurrentYear - data2021Model.BirthDate);
  });

  test('divided', () => {
    expect(mathOperations.divided).toBe(data2021Model.DaysPerYear / data2021Model.MonthsPerYear / data2021Model.HoursPerDay);
  });

  test('multiply', () => {
    expect(mathOperations.multiply).toBe(data2021Model.DaysPerYear * data2021Model.HoursPerDay);
  });

  test('general', () => {
    expect(JSON.stringify(Object.keys(mathOperations))).toBe(JSON.stringify(Object.keys(MathOperationsScheme)));
  });
});

describe('JOIN MAP', () => {
  const tableModel = {
    location: {
      country: 'Colombia',
      code: '+57',
    },
    contact: {
      phone: '0000000000',
      email: 'luismenesesep@gmail.com',
    },
    status: {
      isActive: true,
    },
    user: {
      name: 'Luis',
      lastName: 'Meneses',
    },
    provider: {
      email: 'org@gmail.com',
      isActive: true,
      name: 'ORG',
    },
  };

  const mapOperations = mapOperationsTransform(tableModel);

  test('join-object', () => {
    expect(JSON.stringify(Object.keys(mapOperations))).toBe(JSON.stringify(Object.keys(MapOperationsScheme)));
    expect(JSON.stringify(Object.keys(mapOperations.contact))).toBe(JSON.stringify(Object.keys(MapOperationsScheme.contact)));
    expect(JSON.stringify(Object.keys(mapOperations.user))).toBe(JSON.stringify(Object.keys(MapOperationsScheme.user)));
  });
});

describe('JOIN ARRAY', () => {
  const accountsModel = {
    premium: Array.from(Array(10).keys()).map(user => userAdapter(user)),
    free: Array.from(Array(10).keys()).map(user => ownerAdapter(user)),
    freemium: Array.from(Array(10).keys()).map(user => repositoryAdapter(user)),
  };

  const arrayOperations = arrayOperationsTransform(accountsModel);

  test('join-array', () => {
    expect(JSON.stringify(Object.keys(arrayOperations))).toBe(JSON.stringify(Object.keys(ArrayOperationsScheme)));
    expect(arrayOperations.users.length).toBe(accountsModel.premium.length + accountsModel.free.length + accountsModel.freemium.length);
  });
});
