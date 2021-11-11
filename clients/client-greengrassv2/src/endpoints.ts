import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "dataplane-us-gov-east-1": {
    variants: [
      {
        hostname: "greengrass-ats.iot.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "dataplane-us-gov-west-1": {
    variants: [
      {
        hostname: "greengrass-ats.iot.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "us-gov-east-1": {
    variants: [
      {
        hostname: "greengrass.us-gov-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "greengrass-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "us-gov-west-1": {
    variants: [
      {
        hostname: "greengrass.us-gov-west-1.amazonaws.com",
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
        hostname: "greengrass.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "greengrass-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "greengrass-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "greengrass.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "greengrass.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "greengrass-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "greengrass-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "greengrass.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "greengrass.{region}.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "greengrass.{region}.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "aws-us-gov": {
    regions: [
      "dataplane-us-gov-east-1",
      "dataplane-us-gov-west-1",
      "fips-us-gov-east-1",
      "us-gov-east-1",
      "us-gov-west-1",
    ],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "greengrass.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "greengrass-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "greengrass-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "greengrass.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (
  region: string,
  options?: RegionInfoProviderOptions
) =>
  getRegionInfo(region, {
    ...options,
    signingService: "greengrass",
    regionHash,
    partitionHash,
  });