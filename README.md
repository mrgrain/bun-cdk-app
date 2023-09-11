# AWS CDK with Bun

Example repository how to use the AWS CDK with Bun.

## Getting started

It's as easy as:

```console
bun cdk synth
```

`app.ts` contains the CDK app using Bun\
`cdk.json` points CDK at the Bun app: `bun app.ts`

## Run the CLI directly

Instead of using a task, the CLI can be invoked directly:

```console
bunx aws-cdk synth
```

## Install the CLI globally

It's possible to globally install the CLI:

```console
bun install -g aws-cdk
```

The same command will also update if a newer version is available.

Now using CDK can be shortened to  `cdk synth`.\
However global installation is not recommended, because the versions of the cli and lib can diverge easily.
