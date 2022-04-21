const supertest = require('supertest');
const app = require('../../app');

const api = supertest(app);

// TODO: Include Body Checks

const testHabitData: any = {
    id: 1,
    habit: 'exercise',
    streakActive: true,
    streak: 6
};

describe('/api/habits', () => {
    beforeEach(() => {
        console.log('beforeEach()');
    });

    test('GET /api/habits', async () => {
        await api.get('/api/habits').expect('Content-Type', 'application/json; charset=utf-8').expect(200);
    });

    test('GET /api/habits/:id', async () => {
        await api.get('/api/habits/1').expect('Content-Type', 'application/json; charset=utf-8').expect(200);
    });

    test('DELETE /api/habits/:id', async () => {
        await api.delete('/api/habits/1').expect('Content-Type', 'application/json; charset=utf-8').expect(200);
    });

    test('PUT /api/habits/:id', async () => {
        await api.put('/api/habits/1', testHabitData).expect('Content-Type', 'application/json; charset=utf-8').expect(200);
    });

    afterAll(() => {
        // api.close();
    });
});
