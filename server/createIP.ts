import { client } from "../client/utils.js";
import { uploadJSONToIPFS } from "./uploadToIpfs.js";
import { createHash } from "crypto";
import { LicenseTerms } from "@story-protocol/core-sdk";
import { zeroAddress, zeroHash } from "viem";

export async function createIP(content: string) {
  const ipMetadata = {
    title: "Generated Literature Review",
    description: "A comprehensive review of the provided research papers.",
    ipType: "text",
    content: content,
  };

  const ipIpfsHash = await uploadJSONToIPFS(ipMetadata);
  const ipHash = createHash("sha256")
    .update(JSON.stringify(ipMetadata))
    .digest("hex");

  const commercialRemixTerms: LicenseTerms = {
    transferable: true,
    royaltyPolicy: "0xBe54FB168b3c982b7AaE60dB6CF75Bd8447b390E", // RoyaltyPolicyLAP address from https://docs.story.foundation/docs/deployed-smart-contracts
    defaultMintingFee: BigInt(0),
    expiration: BigInt(0),
    commercialUse: true,
    commercialAttribution: true,
    commercializerChecker: zeroAddress,
    commercializerCheckerData: zeroAddress,
    commercialRevShare: 50, // can claim 50% of derivative revenue
    commercialRevCeiling: BigInt(0),
    derivativesAllowed: true,
    derivativesAttribution: true,
    derivativesApproval: false,
    derivativesReciprocal: true,
    derivativeRevCeiling: BigInt(0),
    currency: "0x1514000000000000000000000000000000000000", // $WIP address from https://docs.story.foundation/docs/deployed-smart-contracts
    uri: "",
  };

  const licensingConfig = {
    isSet: false,
    mintingFee: BigInt(0),
    licensingHook: zeroAddress,
    hookData: zeroHash,
    commercialRevShare: 0,
    disabled: false,
    expectMinimumGroupRewardShare: 0,
    expectGroupRewardPool: zeroAddress,
  };

  const response = await client.ipAsset.mintAndRegisterIpAssetWithPilTerms({
    spgNftContract: "0xc32A8a0FF3beDDDa58393d022aF433e78739FAbc",
    licenseTermsData: [{ terms: commercialRemixTerms, licensingConfig }],
    allowDuplicates: true,
    ipMetadata: {
      ipMetadataURI: `https://ipfs.io/ipfs/${ipIpfsHash}`,
      ipMetadataHash: `0x${ipHash}`,
    },
    txOptions: { waitForTransaction: true },
  });

  console.log(
    `Root IPA created at transaction hash ${response.txHash}, IPA ID: ${response.ipId}`
  );
  console.log(
    `View on the explorer: https://aeneid.explorer.story.foundation/ipa/${response.ipId}`
  );

  console.log(`
    Token ID: ${response.tokenId}, 
    IPA ID: ${response.ipId}, 
  `);

  const response1 = await client.license.mintLicenseTokens({
    licenseTermsId: "10",
    licensorIpId: "0xC92EC2f4c86458AFee7DD9EB5d8c57920BfCD0Ba",
    receiver: "0x7787a0774daCf2376e1D9cB33190394e8C05Db84", // optional. if not provided, it will go to the tx sender
    amount: 2,
    maxMintingFee: BigInt(0), // disabled
    maxRevenueShare: 100, // default
    txOptions: { waitForTransaction: true },
  });

  console.log(
    `License Token minted at transaction hash ${response.txHash}, License IDs: ${response1.licenseTokenIds}`
  );
  return ipMetadata;
}
