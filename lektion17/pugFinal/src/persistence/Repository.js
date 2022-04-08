import {v4 as uuidV4} from 'uuid'
import User from "../domain/User.js";
import serviceAccount from "./fireStoreKey.js"
import admin from "firebase-admin"

class Repository {
    #userMap
    #credentialsMap
    #db;

        constructor() {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            })

            this.#db = admin.firestore()
            this.#userMap = new Map()
            this.#credentialsMap = new Map()
        }

    async createUser(credentials) {
        const id = uuidV4()
        const data = {...credentials.toPlain(), created: new Date()}
        const user = new User(id, credentials, new Date())
        const userRef = this.#db.collection("Users").doc()
        await userRef.set(data)

        this.#credentialsMap.set(credentials.username, id)
        this.#userMap.set(id, user)
        return user
    }


    getUserByUserName(username) {
        const id = this.#credentialsMap.get(username)
        return id ? this.#userMap.get(id) : null
    }
}

export default Repository