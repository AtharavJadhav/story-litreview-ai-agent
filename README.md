AI Agents which parse PDFs and story the literature Review as a IP on the Story chain, thus implementing ATCP/IP protocol

# What has been implemented

[x] AI Agents built in typescript. Client AI Agent takes Reseach Paper PDF from the user, extracts it and gives it to the Server AI Agent.
[x] Server AI Agent takes in the text, gives it to OPEN AI, generates the Literature Review and stores the text as an IP of the creator.
[x] The IP is created on testnet.
[x] Liscence is created at the same time.
[ ] Liscence token minting is giving some errors.
[ ] Revenue collection is not implemented.
[ ] Some other Agent utilizing stored IP Assets is not implemented.
[ ] PDF transcription sometimes gives error for certain PDFs

# How to install

1) Clone the github
```
git clone https://github.com/AtharavJadhav/story-litreview-ai-agent.git
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
