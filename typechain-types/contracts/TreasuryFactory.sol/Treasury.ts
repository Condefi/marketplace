/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface TreasuryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "changes"
      | "deadline"
      | "deposit"
      | "deposits"
      | "executeChange"
      | "minimumAmount"
      | "owner"
      | "parameterTimelock"
      | "pause"
      | "paused"
      | "renounceOwnership"
      | "requestChange"
      | "safe"
      | "setTokenWhitelist"
      | "spenderTimelock"
      | "spenders"
      | "spendingTimelock"
      | "timelockTimelock"
      | "transferOwnership"
      | "unpause"
      | "whitelistedTokens"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ChangeExecuted"
      | "ChangeRequested"
      | "NewSigner"
      | "OwnershipTransferred"
      | "Paused"
      | "TokenWhitelistUpdated"
      | "Unpaused"
  ): EventFragment;

  encodeFunctionData(functionFragment: "changes", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "deadline", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposits",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeChange",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "minimumAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "parameterTimelock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestChange",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "safe", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setTokenWhitelist",
    values: [AddressLike[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "spenderTimelock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "spenders",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "spendingTimelock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "timelockTimelock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "whitelistedTokens",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "changes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deadline", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "parameterTimelock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "safe", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTokenWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "spenderTimelock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "spenders", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "spendingTimelock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timelockTimelock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whitelistedTokens",
    data: BytesLike
  ): Result;
}

export namespace ChangeExecutedEvent {
  export type InputTuple = [lockId: BytesLike];
  export type OutputTuple = [lockId: string];
  export interface OutputObject {
    lockId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChangeRequestedEvent {
  export type InputTuple = [lockId: BytesLike, changeType: BigNumberish];
  export type OutputTuple = [lockId: string, changeType: bigint];
  export interface OutputObject {
    lockId: string;
    changeType: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewSignerEvent {
  export type InputTuple = [signer: AddressLike, newThreshold: BigNumberish];
  export type OutputTuple = [signer: string, newThreshold: bigint];
  export interface OutputObject {
    signer: string;
    newThreshold: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokenWhitelistUpdatedEvent {
  export type InputTuple = [token: AddressLike, status: boolean];
  export type OutputTuple = [token: string, status: boolean];
  export interface OutputObject {
    token: string;
    status: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Treasury extends BaseContract {
  connect(runner?: ContractRunner | null): Treasury;
  waitForDeployment(): Promise<this>;

  interface: TreasuryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  changes: TypedContractMethod<
    [arg0: BytesLike],
    [
      [string, bigint, boolean, bigint] & {
        data: string;
        releaseTime: bigint;
        executed: boolean;
        changeType: bigint;
      }
    ],
    "view"
  >;

  deadline: TypedContractMethod<[], [bigint], "view">;

  deposit: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  deposits: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;

  executeChange: TypedContractMethod<[lockId: BytesLike], [void], "nonpayable">;

  minimumAmount: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  parameterTimelock: TypedContractMethod<[], [bigint], "view">;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  requestChange: TypedContractMethod<
    [changeType: BigNumberish, data: BytesLike],
    [string],
    "nonpayable"
  >;

  safe: TypedContractMethod<[], [string], "view">;

  setTokenWhitelist: TypedContractMethod<
    [tokens: AddressLike[], status: boolean],
    [void],
    "nonpayable"
  >;

  spenderTimelock: TypedContractMethod<[], [bigint], "view">;

  spenders: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  spendingTimelock: TypedContractMethod<[], [bigint], "view">;

  timelockTimelock: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  whitelistedTokens: TypedContractMethod<
    [arg0: AddressLike],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "changes"
  ): TypedContractMethod<
    [arg0: BytesLike],
    [
      [string, bigint, boolean, bigint] & {
        data: string;
        releaseTime: bigint;
        executed: boolean;
        changeType: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "deadline"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deposits"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "executeChange"
  ): TypedContractMethod<[lockId: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "minimumAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "parameterTimelock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "requestChange"
  ): TypedContractMethod<
    [changeType: BigNumberish, data: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "safe"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setTokenWhitelist"
  ): TypedContractMethod<
    [tokens: AddressLike[], status: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "spenderTimelock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "spenders"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "spendingTimelock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "timelockTimelock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "whitelistedTokens"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  getEvent(
    key: "ChangeExecuted"
  ): TypedContractEvent<
    ChangeExecutedEvent.InputTuple,
    ChangeExecutedEvent.OutputTuple,
    ChangeExecutedEvent.OutputObject
  >;
  getEvent(
    key: "ChangeRequested"
  ): TypedContractEvent<
    ChangeRequestedEvent.InputTuple,
    ChangeRequestedEvent.OutputTuple,
    ChangeRequestedEvent.OutputObject
  >;
  getEvent(
    key: "NewSigner"
  ): TypedContractEvent<
    NewSignerEvent.InputTuple,
    NewSignerEvent.OutputTuple,
    NewSignerEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "TokenWhitelistUpdated"
  ): TypedContractEvent<
    TokenWhitelistUpdatedEvent.InputTuple,
    TokenWhitelistUpdatedEvent.OutputTuple,
    TokenWhitelistUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;

  filters: {
    "ChangeExecuted(bytes32)": TypedContractEvent<
      ChangeExecutedEvent.InputTuple,
      ChangeExecutedEvent.OutputTuple,
      ChangeExecutedEvent.OutputObject
    >;
    ChangeExecuted: TypedContractEvent<
      ChangeExecutedEvent.InputTuple,
      ChangeExecutedEvent.OutputTuple,
      ChangeExecutedEvent.OutputObject
    >;

    "ChangeRequested(bytes32,uint8)": TypedContractEvent<
      ChangeRequestedEvent.InputTuple,
      ChangeRequestedEvent.OutputTuple,
      ChangeRequestedEvent.OutputObject
    >;
    ChangeRequested: TypedContractEvent<
      ChangeRequestedEvent.InputTuple,
      ChangeRequestedEvent.OutputTuple,
      ChangeRequestedEvent.OutputObject
    >;

    "NewSigner(address,uint256)": TypedContractEvent<
      NewSignerEvent.InputTuple,
      NewSignerEvent.OutputTuple,
      NewSignerEvent.OutputObject
    >;
    NewSigner: TypedContractEvent<
      NewSignerEvent.InputTuple,
      NewSignerEvent.OutputTuple,
      NewSignerEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "TokenWhitelistUpdated(address,bool)": TypedContractEvent<
      TokenWhitelistUpdatedEvent.InputTuple,
      TokenWhitelistUpdatedEvent.OutputTuple,
      TokenWhitelistUpdatedEvent.OutputObject
    >;
    TokenWhitelistUpdated: TypedContractEvent<
      TokenWhitelistUpdatedEvent.InputTuple,
      TokenWhitelistUpdatedEvent.OutputTuple,
      TokenWhitelistUpdatedEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
  };
}