import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "aws-global": {
    variants: [
      {
        hostname: "networkmanager.us-west-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-2",
  },
  "aws-us-gov-global": {
    variants: [
      {
        hostname: "networkmanager.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
};

const partitionHash: PartitionHash = {
  aws: {
    regions: [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "aws-global",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "networkmanager.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "networkmanager-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "networkmanager-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "networkmanager.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
    endpoint: "aws-global",
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "networkmanager.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "networkmanager-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "networkmanager-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "networkmanager.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "networkmanager.{region}.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "networkmanager.{region}.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["aws-us-gov-global", "us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "networkmanager.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "networkmanager-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "networkmanager-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "networkmanager.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
    endpoint: "aws-us-gov-global",
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (
  region: string,
  options?: RegionInfoProviderOptions
) =>
  getRegionInfo(region, {
    ...options,
    signingService: "networkmanager",
    regionHash,
    partitionHash,
  });