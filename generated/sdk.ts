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
  Long: any;
  Time: any;
};







export type Account = {
  __typename?: 'Account';
  _id: Scalars['ID'];
  _ts: Scalars['Long'];
  balance: Scalars['Float'];
  owner: User;
};

export type AccountInput = {
  balance: Scalars['Float'];
  owner?: Maybe<AccountOwnerRelation>;
};

export type AccountOwnerRelation = {
  create?: Maybe<UserInput>;
  connect?: Maybe<Scalars['ID']>;
};

export type AccountPage = {
  __typename?: 'AccountPage';
  data: Array<Maybe<Account>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};



export type Mutation = {
  __typename?: 'Mutation';
  updateUser?: Maybe<User>;
  partialUpdateAccount?: Maybe<Account>;
  createUser: User;
  deleteAccount?: Maybe<Account>;
  creditAccount?: Maybe<Account>;
  updateAccount?: Maybe<Account>;
  deleteUser?: Maybe<User>;
  debitAccount?: Maybe<Account>;
  partialUpdateUser?: Maybe<User>;
  createAccount: Account;
  updateUserEmail?: Maybe<User>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data: UserInput;
};


export type MutationPartialUpdateAccountArgs = {
  id: Scalars['ID'];
  data: PartialUpdateAccountInput;
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


export type MutationPartialUpdateUserArgs = {
  id: Scalars['ID'];
  data: PartialUpdateUserInput;
};


export type MutationCreateAccountArgs = {
  data: AccountInput;
};


export type MutationUpdateUserEmailArgs = {
  id: Scalars['ID'];
  email: Scalars['ID'];
};

export type PartialUpdateAccountInput = {
  balance?: Maybe<Scalars['Float']>;
  owner?: Maybe<AccountOwnerRelation>;
};

export type PartialUpdateUserInput = {
  name?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['ID']>;
  accounts?: Maybe<UserAccountsRelation>;
};

export type Query = {
  __typename?: 'Query';
  findUserByNameAndCountry?: Maybe<User>;
  findUserByEmail?: Maybe<User>;
  findUsersByNameAndCountry: UserPage;
  findUserByName?: Maybe<User>;
  users: UserPage;
  findUserByID?: Maybe<User>;
  whatever: UserPage;
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
  _id: Scalars['ID'];
  country?: Maybe<Scalars['String']>;
  accounts: AccountPage;
  _ts: Scalars['Long'];
};


export type UserAccountsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

export type UserAccountsRelation = {
  create?: Maybe<Array<Maybe<AccountInput>>>;
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UserInput = {
  name: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  email: Scalars['ID'];
  accounts?: Maybe<UserAccountsRelation>;
};

export type UserPage = {
  __typename?: 'UserPage';
  data: Array<Maybe<User>>;
  after?: Maybe<Scalars['String']>;
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