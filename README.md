AI Agents which parse PDFs and story the literature Review as a IP on the Story chain, thus implementing ATCP/IP protocol

# What has been implemented

[o] AI Agents built in typescript. Client AI Agent takes Reseach Paper PDF from the user, extracts it and gives it to the Server AI Agent.
[o] Server AI Agent takes in the text, gives it to OPEN AI, generates the Literature Review and stores the text as an IP of the creator.
[o] The IP is created on testnet.
[o] Liscence is created at the same time.
[_] Liscence token minting is giving some errors.
[_] Revenue collection is not implemented.
[_] Some other Agent utilizing stored IP Assets is not implemented.
[_] PDF transcription sometimes gives error for certain PDFs

# How to install

1) Clone the github
```
git clone
```
2) Install Dependencies after checking in to the directory

```
npm install
```

3) Run the following commands in separate terminals

```
npm run start-server
npm run start-client
```
