import conf from '../configVariables/config'
import {Client, ID, Database, Storage, Query} from 'appwrite'

export class Service{
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteEndpoint)
            .setProject(conf.appwriteProjectId)
    
        this.databases = new Database(this.client)
        this.bucket = new Storage(this.client)    
    }

    async createPost({title, slug, content, featuredimage, status, userId}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId, 
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userId,
                }
            ) ;
        } catch (error) {
            console.log("Appwrite service :: createPost :: error :: ", error)
        }
    } 

    async updatePost(slug, {title, content, featuredimage, status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                }
            
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error :: ", error)
            
        }
    }

    async datelePost(slug) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error :: ", error)
            
        }
    }
} 

const service = new Service()

export default Service