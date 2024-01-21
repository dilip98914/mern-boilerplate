const aws=require('aws-sdk')
const { AWS_ACCESS_KEYID,AWS_SECRET_KEY,AWS_REGION,PRIVATE_BUCKET}=process.env
aws.config.update({
    region:AWS_REGION,
    accessKeyId:AWS_ACCESS_KEYID,
    secretAccessKey:AWS_SECRET_KEY
})

const s3=new aws.S3();

async function getSignedUrlOfStoredData(storedUrl,Key){
    try{
        return await s3.getSignedUrl('getObject',{
            Bucket:PRIVATE_BUCKET,
            Key,
            Expires:24*60*60,
            ResponseContentType:'application/pdf'
        })
    }catch(err){
        console.error(err)
        return storedUrl;
    }
}