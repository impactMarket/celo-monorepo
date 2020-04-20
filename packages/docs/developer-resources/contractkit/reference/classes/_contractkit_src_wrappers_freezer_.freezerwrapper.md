# Class: FreezerWrapper

## Hierarchy

* [BaseWrapper](_contractkit_src_wrappers_basewrapper_.basewrapper.md)‹Freezer›

  ↳ **FreezerWrapper**

## Index

### Constructors

* [constructor](_contractkit_src_wrappers_freezer_.freezerwrapper.md#constructor)

### Properties

* [events](_contractkit_src_wrappers_freezer_.freezerwrapper.md#events)
* [freeze](_contractkit_src_wrappers_freezer_.freezerwrapper.md#freeze)
* [isFrozen](_contractkit_src_wrappers_freezer_.freezerwrapper.md#isfrozen)
* [unfreeze](_contractkit_src_wrappers_freezer_.freezerwrapper.md#unfreeze)

### Accessors

* [address](_contractkit_src_wrappers_freezer_.freezerwrapper.md#address)

## Constructors

###  constructor

\+ **new FreezerWrapper**(`kit`: [ContractKit](_contractkit_src_kit_.contractkit.md), `contract`: Freezer): *[FreezerWrapper](_contractkit_src_wrappers_freezer_.freezerwrapper.md)*

*Inherited from [BaseWrapper](_contractkit_src_wrappers_basewrapper_.basewrapper.md).[constructor](_contractkit_src_wrappers_basewrapper_.basewrapper.md#constructor)*

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:19](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`kit` | [ContractKit](_contractkit_src_kit_.contractkit.md) |
`contract` | Freezer |

**Returns:** *[FreezerWrapper](_contractkit_src_wrappers_freezer_.freezerwrapper.md)*

## Properties

###  events

• **events**: *any* = this.contract.events

*Inherited from [BaseWrapper](_contractkit_src_wrappers_basewrapper_.basewrapper.md).[events](_contractkit_src_wrappers_basewrapper_.basewrapper.md#events)*

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:33](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L33)*

___

###  freeze

• **freeze**: *function* = proxySend(this.kit, this.contract.methods.freeze)

*Defined in [contractkit/src/wrappers/Freezer.ts:5](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Freezer.ts#L5)*

#### Type declaration:

▸ (...`args`: InputArgs): *[CeloTransactionObject](_contractkit_src_wrappers_basewrapper_.celotransactionobject.md)‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  isFrozen

• **isFrozen**: *function* = proxyCall(this.contract.methods.isFrozen)

*Defined in [contractkit/src/wrappers/Freezer.ts:7](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Freezer.ts#L7)*

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  unfreeze

• **unfreeze**: *function* = proxySend(this.kit, this.contract.methods.unfreeze)

*Defined in [contractkit/src/wrappers/Freezer.ts:6](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Freezer.ts#L6)*

#### Type declaration:

▸ (...`args`: InputArgs): *[CeloTransactionObject](_contractkit_src_wrappers_basewrapper_.celotransactionobject.md)‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

## Accessors

###  address

• **get address**(): *string*

*Inherited from [BaseWrapper](_contractkit_src_wrappers_basewrapper_.basewrapper.md).[address](_contractkit_src_wrappers_basewrapper_.basewrapper.md#address)*

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:23](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L23)*

Contract address

**Returns:** *string*