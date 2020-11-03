import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Time: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

/** 'Account' input values */
export type AccountInput = {
  balance: Scalars['Float'];
  owner?: Maybe<AccountOwnerRelation>;
};

/** Allow manipulating the relationship between the types 'Account' and 'User' using the field 'Account.owner'. */
export type AccountOwnerRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  /** Update an existing document in the collection of 'User' */
  updateUser?: Maybe<User>;
  /** Create a new document in the collection of 'User' */
  createUser: User;
  /** Delete an existing document in the collection of 'Account' */
  deleteAccount?: Maybe<Account>;
  creditAccount?: Maybe<Account>;
  /** Update an existing document in the collection of 'Account' */
  updateAccount?: Maybe<Account>;
  /** Delete an existing document in the collection of 'User' */
  deleteUser?: Maybe<User>;
  debitAccount?: Maybe<Account>;
  /** Create a new document in the collection of 'Account' */
  createAccount: Account;
  updateUserEmail?: Maybe<User>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data: UserInput;
};


export type MutationCreateUserArgs = {
  data: UserInput;
};


export type MutationDeleteAccountArgs = {
  id: Scalars['ID'];
};


export type MutationCreditAccountArgs = {
  id: Scalars['ID'];
  value: Scalars['Float'];
};


export type MutationUpdateAccountArgs = {
  id: Scalars['ID'];
  data: AccountInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDebitAccountArgs = {
  id: Scalars['ID'];
  value: Scalars['Float'];
};


export type MutationCreateAccountArgs = {
  data: AccountInput;
};


export type MutationUpdateUserEmailArgs = {
  id: Scalars['ID'];
  email: Scalars['ID'];
};


/** Allow manipulating the relationship between the types 'User' and 'Account'. */
export type UserAccountsRelation = {
  /** Create one or more documents of type 'Account' and associate them with the current document. */
  create?: Maybe<Array<Maybe<AccountInput>>>;
  /** Connect one or more documents of type 'Account' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Account' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** 'User' input values */
export type UserInput = {
  name: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  email: Scalars['ID'];
  accounts?: Maybe<UserAccountsRelation>;
};

export type Account = {
  __typename?: 'Account';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  balance: Scalars['Float'];
  owner: User;
};

/** The pagination object for elements of type 'Account'. */
export type AccountPage = {
  __typename?: 'AccountPage';
  /** The elements of type 'Account' in this page. */
  data: Array<Maybe<Account>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  findUserByNameAndCountry?: Maybe<User>;
  findUserByEmail?: Maybe<User>;
  findUsersByNameAndCountry: UserPage;
  findUserByName?: Maybe<User>;
  users: UserPage;
  /** Find a document from the collection of 'User' by its id. */
  findUserByID?: Maybe<User>;
  whatever: UserPage;
  /** Find a document from the collection of 'Account' by its id. */
  findAccountByID?: Maybe<Account>;
};


export type QueryFindUserByNameAndCountryArgs = {
  name: Scalars['String'];
  country: Scalars['String'];
};


export type QueryFindUserByEmailArgs = {
  email: Scalars['ID'];
};


export type QueryFindUsersByNameAndCountryArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  country: Scalars['String'];
};


export type QueryFindUserByNameArgs = {
  name: Scalars['String'];
};


export type QueryUsersArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindUserByIdArgs = {
  id: Scalars['ID'];
};


export type QueryWhateverArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindAccountByIdArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  name: Scalars['String'];
  email: Scalars['ID'];
  /** The document's ID. */
  _id: Scalars['ID'];
  country?: Maybe<Scalars['String']>;
  accounts: AccountPage;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};


export type UserAccountsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

/** The pagination object for elements of type 'User'. */
export type UserPage = {
  __typename?: 'UserPage';
  /** The elements of type 'User' in this page. */
  data: Array<Maybe<User>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};


export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'name' | 'email' | 'country' | '_id'>
);

export type CreateAccountMutationVariables = Exact<{
  input: AccountInput;
}>;


export type CreateAccountMutation = (
  { __typename?: 'Mutation' }
  & { createAccount: (
    { __typename?: 'Account' }
    & Pick<Account, '_id' | 'balance'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email' | 'country' | '_id'>
  ) }
);

export type CreditAccountMutationVariables = Exact<{
  id: Scalars['ID'];
  value: Scalars['Float'];
}>;


export type CreditAccountMutation = (
  { __typename?: 'Mutation' }
  & { creditAccount?: Maybe<(
    { __typename?: 'Account' }
    & Pick<Account, 'balance'>
  )> }
);

export type FindUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindUserQuery = (
  { __typename?: 'Query' }
  & { findUserByID?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email' | '_id'>
  )> }
);

export type FindUserByNameAndCountryQueryVariables = Exact<{
  name: Scalars['String'];
  country: Scalars['String'];
}>;


export type FindUserByNameAndCountryQuery = (
  { __typename?: 'Query' }
  & { findUsersByNameAndCountry: (
    { __typename?: 'UserPage' }
    & { data: Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'name' | 'email' | 'country'>
    )>> }
  ) }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: (
    { __typename?: 'UserPage' }
    & { data: Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'name' | 'email' | 'country'>
    )>> }
  ) }
);

export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  name
  email
  country
  _id
}
    `;
export const CreateAccountDocument = gql`
    mutation createAccount($input: AccountInput!) {
  createAccount(data: $input) {
    _id
    balance
  }
}
    `;
export const CreateUserDocument = gql`
    mutation createUser($input: UserInput!) {
  createUser(data: $input) {
    name
    email
    country
    _id
  }
}
    `;
export const CreditAccountDocument = gql`
    mutation creditAccount($id: ID!, $value: Float!) {
  creditAccount(id: $id, value: $value) {
    balance
  }
}
    `;
export const FindUserDocument = gql`
    query findUser($id: ID!) {
  findUserByID(id: $id) {
    name
    email
    _id
  }
}
    `;
export const FindUserByNameAndCountryDocument = gql`
    query findUserByNameAndCountry($name: String!, $country: String!) {
  findUsersByNameAndCountry(name: $name, country: $country, _size: 10) {
    data {
      name
      email
      country
    }
  }
}
    `;
export const UsersDocument = gql`
    query users {
  users {
    data {
      name
      email
      country
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createAccount(variables: CreateAccountMutationVariables): Promise<CreateAccountMutation> {
      return withWrapper(() => client.request<CreateAccountMutation>(print(CreateAccountDocument), variables));
    },
    createUser(variables: CreateUserMutationVariables): Promise<CreateUserMutation> {
      return withWrapper(() => client.request<CreateUserMutation>(print(CreateUserDocument), variables));
    },
    creditAccount(variables: CreditAccountMutationVariables): Promise<CreditAccountMutation> {
      return withWrapper(() => client.request<CreditAccountMutation>(print(CreditAccountDocument), variables));
    },
    findUser(variables: FindUserQueryVariables): Promise<FindUserQuery> {
      return withWrapper(() => client.request<FindUserQuery>(print(FindUserDocument), variables));
    },
    findUserByNameAndCountry(variables: FindUserByNameAndCountryQueryVariables): Promise<FindUserByNameAndCountryQuery> {
      return withWrapper(() => client.request<FindUserByNameAndCountryQuery>(print(FindUserByNameAndCountryDocument), variables));
    },
    users(variables?: UsersQueryVariables): Promise<UsersQuery> {
      return withWrapper(() => client.request<UsersQuery>(print(UsersDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;