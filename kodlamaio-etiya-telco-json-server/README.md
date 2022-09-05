<p align="center">
  <a href="https://github.com/ahmet-cetinkaya-other/kodlamaio-etiya-telco-json-server">🗄️</a>
  <h3 align="center">Kodlamaio Etiya Telco Json Server</h3>
  <p align="center">
    Fake Backend service of example telecommunication database for frontend tutorials.
  </p>
</p>

## ⚙️ Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ahmet-cetinkaya-other/kodlamaio-etiya-telco-json-server.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Copy `.env.example` and rename as `.env`.
4. Set `JWT_SECRET_KEY` value in `.env`

## 🚀 Usage

Start project

```sh
npm start
```
### 🔀 Routes
**Check [json-server routes](https://github.com/typicode/json-server/blob/master/README.md#routes).**

**In addition:**
| Route           | Comment                               | Body                                   | Header                                   | Return                                   |
| --------------- | ------------------------------------- | -------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| auth/login      | Login process                         | `{userName: string, password: string}` |                                          | `{success:boolean, access_token:string}` |
| auth/test       | Test your access token                |                                        | Authorization: `"Bearer <access_token>"` | `{success:boolean, message:string}`      |
| auth/test-admin | Test your access token has admin role |                                        | Authorization: `"Bearer <access_token>"` | `{success:boolean, message:string}`      |
