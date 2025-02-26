# Description

AI Agents parse PDFs and story the Literature Review as an IP on the Story chain, thus implementing the ATCP/IP protocol

# What has been implemented

-[x] AI Agents built in typescript. Client AI Agent takes the Research Paper PDF from the user, extracts it and gives it to the Server AI Agent.

-[x] Server AI Agent takes in the text, gives it to OPEN AI, generates the Literature Review and stores the text as an IP of the creator.

-[x] The IP is created on testnet.

-[x] Licence is created at the same time.

-[ ] Liscence token minting is giving some errors.

-[ ] Revenue collection is not implemented.

-[ ] Some other Agents utilizing stored IP assets have not been implemented.

-[ ] PDF transcription sometimes gives errors for certain PDFs

# How to install

1) Clone the GitHub
```
git clone https://github.com/AtharavJadhav/story-litreview-ai-agent.git
```
2) Install Dependencies after checking into the directory

```
npm install
```

3) Run the following commands in separate terminals

```
npm run start-server
npm run start-client
```
