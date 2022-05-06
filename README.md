# Tracker

Tracker is a placeholder name for Habit Tracker Application -project.

---

## Architecture

- `tracker-ui` - React Application
- `tracker-api` - API with CRUD (Create - Read - Update - Delete)

---

## Technology

- **M**ongoDB - **E**xpress - **R**eact - **N**ode -stack.
- `tracker-ui` - React Application
- `tracker-api` - Express and Node.js Application, with TypeScript

---

## Tools

- Using [GitHub CLI](https://cli.github.com/)
- Using [GitHub Issues](https://github.com/features/issues)
- Using [GitHub Actions](https://github.com/features/actions)

---

## How-to-Run

- TBD

---

## How-to-Develop

- Pull Requests: TBD
- `git add .`
- `git commit -m "<COMMIT MESSAGE>"
- `git tag <VERSION NUMBER>`
- `git push`

---

### API Endpoints

- `/api/habits`
- `/api/users`

#### Available HTTP Commands

- `GET /api/habits`
- `GET /api/habits/:id`
- `POST /api/habits`
- `PUT /api/habits/:id`
- `DELETE /api/habits/:id`

- `GET /api/users`
- `GET /api/users/:id`
- `POST /api/users`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`

---

### Example Habit JSON

```
{
    "id": number,
    "habit: string,
    "user": string,
    "streakActive": boolean,
    "streak": number,
    ...
}
```

---

### Example User JSON

```
{
    "id": number,
    "name": string,
    "nickname": string,
    "email": string,
    "password": string,
    "habits": {
        ...
    }
}
```
