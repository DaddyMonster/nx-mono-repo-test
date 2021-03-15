import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  age?: Maybe<Scalars['Float']>;
  homepage: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  writtenBookIds: Array<Scalars['ID']>;
  writtenBooks: Array<Book>;
};

export type Book = {
  __typename?: 'Book';
  author: Author;
  authorId: Scalars['ID'];
  id: Scalars['ID'];
  price: Scalars['Float'];
  purchase: Array<BookPurchase>;
  title: Scalars['String'];
};

export type BookPurchase = {
  __typename?: 'BookPurchase';
  book: Book;
  bookId: Scalars['ID'];
  paid: Scalars['Float'];
  user: User;
  userId: Scalars['ID'];
};

export type ConnectionReturn = {
  __typename?: 'ConnectionReturn';
  connection: Scalars['Boolean'];
  prefix: Scalars['String'];
};

export type CreateAuthorDto = {
  age?: Maybe<Scalars['Float']>;
  homepage: Scalars['String'];
  name: Scalars['String'];
};

export type CreateBookInput = {
  authorId: Scalars['ID'];
  price: Scalars['Float'];
  title: Scalars['String'];
};

export type CreateUserInput = {
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor: Author;
  createBook: Book;
  loginUser: User;
  registerUser: User;
};


export type MutationCreateAuthorArgs = {
  authorInput: CreateAuthorDto;
};


export type MutationCreateBookArgs = {
  createBookInput: CreateBookInput;
};


export type MutationLoginUserArgs = {
  input: LoginInput;
};


export type MutationRegisterUserArgs = {
  input: CreateUserInput;
};

export type Query = {
  __typename?: 'Query';
  checkConnection: ConnectionReturn;
  findAuthor: Author;
  getAllBooks: Array<Book>;
  getAuthors: Array<Author>;
  getBookById: Book;
  getUserById: User;
  me: User;
};


export type QueryFindAuthorArgs = {
  id: Scalars['ID'];
};


export type QueryGetBookByIdArgs = {
  bookId: Scalars['ID'];
};


export type QueryGetUserByIdArgs = {
  userId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  purchased: Array<BookPurchase>;
  username: Scalars['String'];
};

export type CheckConnectionQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckConnectionQuery = (
  { __typename?: 'Query' }
  & { checkConnection: (
    { __typename?: 'ConnectionReturn' }
    & Pick<ConnectionReturn, 'connection' | 'prefix'>
  ) }
);


export const CheckConnectionDocument = gql`
    query CheckConnection {
  checkConnection {
    connection
    prefix
  }
}
    `;

/**
 * __useCheckConnectionQuery__
 *
 * To run a query within a React component, call `useCheckConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckConnectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckConnectionQuery(baseOptions?: Apollo.QueryHookOptions<CheckConnectionQuery, CheckConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckConnectionQuery, CheckConnectionQueryVariables>(CheckConnectionDocument, options);
      }
export function useCheckConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckConnectionQuery, CheckConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckConnectionQuery, CheckConnectionQueryVariables>(CheckConnectionDocument, options);
        }
export type CheckConnectionQueryHookResult = ReturnType<typeof useCheckConnectionQuery>;
export type CheckConnectionLazyQueryHookResult = ReturnType<typeof useCheckConnectionLazyQuery>;
export type CheckConnectionQueryResult = Apollo.QueryResult<CheckConnectionQuery, CheckConnectionQueryVariables>;