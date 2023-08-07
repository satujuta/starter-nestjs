import { Prisma } from '@prisma/client';
export declare enum UserNotificationScalarFieldEnum {
    id = "id",
    title = "title",
    subtitle = "subtitle",
    content = "content",
    createdAt = "createdAt",
    category = "category",
    isRead = "isRead",
    isCleared = "isCleared",
    userId = "userId",
    deepLink = "deepLink",
    fcmToken = "fcmToken"
}
export declare enum UserScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    email = "email",
    addressId = "addressId",
    userRole = "userRole",
    userType = "userType",
    avatarUrl = "avatarUrl",
    whatsappNumber = "whatsappNumber",
    whatsappVerifiedAt = "whatsappVerifiedAt",
    password = "password",
    referralCode = "referralCode",
    referredById = "referredById",
    status = "status",
    schoolId = "schoolId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    theme = "theme"
}
export declare enum TransactionScalarFieldEnum {
    id = "id",
    amount = "amount",
    status = "status",
    transactionType = "transactionType",
    transactionCategory = "transactionCategory",
    currentBalance = "currentBalance",
    userId = "userId",
    accountId = "accountId",
    createdAt = "createdAt"
}
export declare enum ShippingScalarFieldEnum {
    id = "id",
    logisticName = "logisticName",
    deliveryDate = "deliveryDate",
    shippingStatus = "shippingStatus",
    addressId = "addressId",
    courier = "courier",
    estimatedTime = "estimatedTime",
    trackingNo = "trackingNo",
    orderId = "orderId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum SessionScalarFieldEnum {
    id = "id",
    token = "token",
    expiresAt = "expiresAt",
    createdAt = "createdAt",
    userId = "userId",
    device = "device",
    ipAddress = "ipAddress"
}
export declare enum SchoolScalarFieldEnum {
    id = "id",
    name = "name",
    addressId = "addressId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum RewardScalarFieldEnum {
    id = "id",
    name = "name",
    pointCost = "pointCost",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ProjectScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    projectCategory = "projectCategory",
    startDate = "startDate",
    endDate = "endDate",
    returnRate = "returnRate",
    goalAmount = "goalAmount",
    currentAmount = "currentAmount",
    minimumInvestment = "minimumInvestment",
    maxInvestor = "maxInvestor",
    accountId = "accountId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ProgramCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ProgramScalarFieldEnum {
    id = "id",
    name = "name",
    startDate = "startDate",
    dueDate = "dueDate",
    description = "description",
    createdById = "createdById",
    categoryId = "categoryId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum UserType {
    PARENT = "PARENT",
    SCHOOL_HEAD = "SCHOOL_HEAD",
    STUDENT = "STUDENT"
}
export declare enum UserStatus {
    ACTIVE = "ACTIVE",
    PENDING = "PENDING",
    INACTIVE = "INACTIVE"
}
export declare enum UserRole {
    MEMBER = "MEMBER",
    ADMIN = "ADMIN",
    SUPERUSER = "SUPERUSER",
    STUDENT = "STUDENT"
}
export declare enum UserNotificationCategory {
    BILLING_ALERT = "BILLING_ALERT",
    ANNOUNCEMENT = "ANNOUNCEMENT",
    CHAT_MESSAGE = "CHAT_MESSAGE"
}
export declare enum TransactionType {
    DEBIT = "DEBIT",
    CREDIT = "CREDIT"
}
export declare enum TransactionStatus {
    PROCESSING = "PROCESSING",
    PENDING = "PENDING",
    FAILED = "FAILED",
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED"
}
export declare enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}
export declare enum TransactionCategory {
    INVESTMENT = "INVESTMENT",
    INVESTMENT_RETURN = "INVESTMENT_RETURN",
    COMISSION_BONUS = "COMISSION_BONUS",
    WITHDRAWAL = "WITHDRAWAL",
    MEMBER_REGISTRATION = "MEMBER_REGISTRATION",
    STUDENT_REGISTRATION = "STUDENT_REGISTRATION"
}
export declare enum Theme {
    LIGHT = "LIGHT",
    DARK = "DARK"
}
export declare enum SortOrder {
    asc = "asc",
    desc = "desc"
}
export declare enum ShippingStatus {
    PROCESSING = "PROCESSING",
    DELIVERING = "DELIVERING",
    DELIVERED = "DELIVERED"
}
export declare enum ProjectCategory {
    PROPERTY = "PROPERTY",
    BUSSINESS = "BUSSINESS"
}
export declare enum PointType {
    REFERRING = "REFERRING",
    REDEEMING = "REDEEMING"
}
export declare enum NullsOrder {
    first = "first",
    last = "last"
}
export declare enum FileType {
    MP4 = "MP4",
    JPG = "JPG",
    PNG = "PNG",
    PDF = "PDF"
}
export declare enum AccountCategory {
    EQUITY = "EQUITY",
    PROJECT = "PROJECT",
    COMISSION = "COMISSION",
    CASH = "CASH",
    PLATFORM = "PLATFORM",
    BANK = "BANK"
}
export declare enum PostalCodeScalarFieldEnum {
    id = "id",
    code = "code"
}
export declare enum PointTransactionScalarFieldEnum {
    id = "id",
    amount = "amount",
    pointType = "pointType",
    transactionType = "transactionType",
    currentBalance = "currentBalance",
    userId = "userId",
    createdAt = "createdAt"
}
export declare enum PaymentConfirmationScalarFieldEnum {
    id = "id",
    ProofUrl = "ProofUrl",
    paymentId = "paymentId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum PaymentScalarFieldEnum {
    id = "id",
    adminFee = "adminFee",
    totalPayment = "totalPayment",
    orderId = "orderId",
    transactionId = "transactionId",
    createdAt = "createdAt"
}
export declare enum OrderScalarFieldEnum {
    id = "id",
    status = "status",
    orderById = "orderById",
    shippingId = "shippingId",
    isFullPaid = "isFullPaid",
    cost = "cost",
    platformFee = "platformFee",
    total = "total",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ItemScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    price = "price",
    qty = "qty",
    userRole = "userRole",
    orderId = "orderId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ImagesScalarFieldEnum {
    id = "id",
    fileType = "fileType",
    filesize = "filesize",
    url = "url",
    hotelImageId = "hotelImageId",
    programImageId = "programImageId",
    rewardImageId = "rewardImageId",
    projectImageId = "projectImageId",
    createdAt = "createdAt"
}
export declare enum HotelScalarFieldEnum {
    id = "id",
    name = "name",
    addressId = "addressId",
    description = "description",
    rating = "rating",
    startDate = "startDate",
    quota = "quota",
    createdById = "createdById",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum FileScalarFieldEnum {
    id = "id",
    fileType = "fileType",
    filesize = "filesize",
    name = "name",
    description = "description",
    url = "url",
    createdById = "createdById",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum FaqScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum DistrictScalarFieldEnum {
    id = "id",
    name = "name"
}
export declare enum CityScalarFieldEnum {
    id = "id",
    name = "name"
}
export declare enum CheckInScalarFieldEnum {
    id = "id",
    userId = "userId",
    hotelId = "hotelId",
    checkInAt = "checkInAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum BankScalarFieldEnum {
    id = "id",
    name = "name",
    logoUrl = "logoUrl",
    accountNumber = "accountNumber",
    accountId = "accountId"
}
export declare enum AddressScalarFieldEnum {
    id = "id",
    name = "name",
    cityId = "cityId",
    districtId = "districtId",
    postalCodeId = "postalCodeId"
}
export declare enum AccountScalarFieldEnum {
    id = "id",
    accountNumber = "accountNumber",
    name = "name",
    balance = "balance",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId",
    accountCategory = "accountCategory"
}
export declare class AccountAggregateArgs {
    where?: InstanceType<typeof AccountWhereInput>;
    orderBy?: Array<AccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AccountCountAggregateInput>;
    _avg?: InstanceType<typeof AccountAvgAggregateInput>;
    _sum?: InstanceType<typeof AccountSumAggregateInput>;
    _min?: InstanceType<typeof AccountMinAggregateInput>;
    _max?: InstanceType<typeof AccountMaxAggregateInput>;
}
export declare class AccountAvgAggregateInput {
    id?: true;
    accountNumber?: true;
    balance?: true;
}
export declare class AccountAvgAggregate {
    id?: number;
    accountNumber?: number;
    balance?: number;
}
export declare class AccountAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    balance?: keyof typeof SortOrder;
}
export declare class AccountCountAggregateInput {
    id?: true;
    accountNumber?: true;
    name?: true;
    balance?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
    accountCategory?: true;
    _all?: true;
}
export declare class AccountCountAggregate {
    id: number;
    accountNumber: number;
    name: number;
    balance: number;
    createdAt: number;
    updatedAt: number;
    userId: number;
    accountCategory: number;
    _all: number;
}
export declare class AccountCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    balance?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    accountCategory?: keyof typeof SortOrder;
}
export declare class AccountCount {
    transactions?: number;
}
export declare class AccountCreateManyUserInputEnvelope {
    data: Array<AccountCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class AccountCreateManyUserInput {
    id?: number;
    accountNumber?: number;
    name: string;
    balance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accountCategory: keyof typeof AccountCategory;
}
export declare class AccountCreateManyInput {
    id?: number;
    accountNumber?: number;
    name: string;
    balance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
    accountCategory: keyof typeof AccountCategory;
}
export declare class AccountCreateNestedManyWithoutUserInput {
    create?: Array<AccountCreateWithoutUserInput>;
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
}
export declare class AccountCreateNestedOneWithoutBankAccountInput {
    create?: InstanceType<typeof AccountCreateWithoutBankAccountInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutBankAccountInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class AccountCreateNestedOneWithoutProjectInput {
    create?: InstanceType<typeof AccountCreateWithoutProjectInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutProjectInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class AccountCreateNestedOneWithoutTransactionsInput {
    create?: InstanceType<typeof AccountCreateWithoutTransactionsInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutTransactionsInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class AccountCreateOrConnectWithoutBankAccountInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AccountCreateWithoutBankAccountInput>;
}
export declare class AccountCreateOrConnectWithoutProjectInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AccountCreateWithoutProjectInput>;
}
export declare class AccountCreateOrConnectWithoutTransactionsInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AccountCreateWithoutTransactionsInput>;
}
export declare class AccountCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AccountCreateWithoutUserInput>;
}
export declare class AccountCreateWithoutBankAccountInput {
    accountNumber?: number;
    name: string;
    balance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accountCategory: keyof typeof AccountCategory;
    user: InstanceType<typeof UserCreateNestedOneWithoutAccountsInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutAccountInput>;
    project?: InstanceType<typeof ProjectCreateNestedOneWithoutAccountInput>;
}
export declare class AccountCreateWithoutProjectInput {
    accountNumber?: number;
    name: string;
    balance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accountCategory: keyof typeof AccountCategory;
    user: InstanceType<typeof UserCreateNestedOneWithoutAccountsInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutAccountInput>;
    bankAccount?: InstanceType<typeof BankCreateNestedOneWithoutAccountInput>;
}
export declare class AccountCreateWithoutTransactionsInput {
    accountNumber?: number;
    name: string;
    balance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accountCategory: keyof typeof AccountCategory;
    user: InstanceType<typeof UserCreateNestedOneWithoutAccountsInput>;
    project?: InstanceType<typeof ProjectCreateNestedOneWithoutAccountInput>;
    bankAccount?: InstanceType<typeof BankCreateNestedOneWithoutAccountInput>;
}
export declare class AccountCreateWithoutUserInput {
    accountNumber?: number;
    name: string;
    balance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accountCategory: keyof typeof AccountCategory;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutAccountInput>;
    project?: InstanceType<typeof ProjectCreateNestedOneWithoutAccountInput>;
    bankAccount?: InstanceType<typeof BankCreateNestedOneWithoutAccountInput>;
}
export declare class AccountCreateInput {
    accountNumber?: number;
    name: string;
    balance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accountCategory: keyof typeof AccountCategory;
    user: InstanceType<typeof UserCreateNestedOneWithoutAccountsInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutAccountInput>;
    project?: InstanceType<typeof ProjectCreateNestedOneWithoutAccountInput>;
    bankAccount?: InstanceType<typeof BankCreateNestedOneWithoutAccountInput>;
}
export declare class AccountGroupByArgs {
    where?: InstanceType<typeof AccountWhereInput>;
    orderBy?: Array<AccountOrderByWithAggregationInput>;
    by: Array<keyof typeof AccountScalarFieldEnum>;
    having?: InstanceType<typeof AccountScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AccountCountAggregateInput>;
    _avg?: InstanceType<typeof AccountAvgAggregateInput>;
    _sum?: InstanceType<typeof AccountSumAggregateInput>;
    _min?: InstanceType<typeof AccountMinAggregateInput>;
    _max?: InstanceType<typeof AccountMaxAggregateInput>;
}
export declare class AccountGroupBy {
    id: number;
    accountNumber?: number;
    name: string;
    balance: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    userId: string;
    accountCategory: keyof typeof AccountCategory;
    _count?: InstanceType<typeof AccountCountAggregate>;
    _avg?: InstanceType<typeof AccountAvgAggregate>;
    _sum?: InstanceType<typeof AccountSumAggregate>;
    _min?: InstanceType<typeof AccountMinAggregate>;
    _max?: InstanceType<typeof AccountMaxAggregate>;
}
export declare class AccountListRelationFilter {
    every?: InstanceType<typeof AccountWhereInput>;
    some?: InstanceType<typeof AccountWhereInput>;
    none?: InstanceType<typeof AccountWhereInput>;
}
export declare class AccountMaxAggregateInput {
    id?: true;
    accountNumber?: true;
    name?: true;
    balance?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
    accountCategory?: true;
}
export declare class AccountMaxAggregate {
    id?: number;
    accountNumber?: number;
    name?: string;
    balance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId?: string;
    accountCategory?: keyof typeof AccountCategory;
}
export declare class AccountMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    balance?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    accountCategory?: keyof typeof SortOrder;
}
export declare class AccountMinAggregateInput {
    id?: true;
    accountNumber?: true;
    name?: true;
    balance?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
    accountCategory?: true;
}
export declare class AccountMinAggregate {
    id?: number;
    accountNumber?: number;
    name?: string;
    balance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId?: string;
    accountCategory?: keyof typeof AccountCategory;
}
export declare class AccountMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    balance?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    accountCategory?: keyof typeof SortOrder;
}
export declare class AccountOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class AccountOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    accountNumber?: InstanceType<typeof SortOrderInput>;
    name?: keyof typeof SortOrder;
    balance?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    accountCategory?: keyof typeof SortOrder;
    _count?: InstanceType<typeof AccountCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof AccountAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof AccountMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof AccountMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof AccountSumOrderByAggregateInput>;
}
export declare class AccountOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    accountNumber?: InstanceType<typeof SortOrderInput>;
    name?: keyof typeof SortOrder;
    balance?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    accountCategory?: keyof typeof SortOrder;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    transactions?: InstanceType<typeof TransactionOrderByRelationAggregateInput>;
    project?: InstanceType<typeof ProjectOrderByWithRelationInput>;
    bankAccount?: InstanceType<typeof BankOrderByWithRelationInput>;
}
export declare class AccountRelationFilter {
    is?: InstanceType<typeof AccountWhereInput>;
    isNot?: InstanceType<typeof AccountWhereInput>;
}
export declare class AccountScalarWhereWithAggregatesInput {
    AND?: Array<AccountScalarWhereWithAggregatesInput>;
    OR?: Array<AccountScalarWhereWithAggregatesInput>;
    NOT?: Array<AccountScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    accountNumber?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    balance?: InstanceType<typeof FloatWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryWithAggregatesFilter>;
}
export declare class AccountScalarWhereInput {
    AND?: Array<AccountScalarWhereInput>;
    OR?: Array<AccountScalarWhereInput>;
    NOT?: Array<AccountScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    accountNumber?: InstanceType<typeof IntNullableFilter>;
    name?: InstanceType<typeof StringFilter>;
    balance?: InstanceType<typeof FloatFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringFilter>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFilter>;
}
export declare class AccountSumAggregateInput {
    id?: true;
    accountNumber?: true;
    balance?: true;
}
export declare class AccountSumAggregate {
    id?: number;
    accountNumber?: number;
    balance?: number;
}
export declare class AccountSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    balance?: keyof typeof SortOrder;
}
export declare class AccountUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<AccountCreateWithoutUserInput>;
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
}
export declare class AccountUncheckedCreateWithoutBankAccountInput {
    id?: number;
    accountNumber?: number;
    name: string;
    balance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
    accountCategory: keyof typeof AccountCategory;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutAccountInput>;
    project?: InstanceType<typeof ProjectUncheckedCreateNestedOneWithoutAccountInput>;
}
export declare class AccountUncheckedCreateWithoutProjectInput {
    id?: number;
    accountNumber?: number;
    name: string;
    balance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
    accountCategory: keyof typeof AccountCategory;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutAccountInput>;
    bankAccount?: InstanceType<typeof BankUncheckedCreateNestedOneWithoutAccountInput>;
}
export declare class AccountUncheckedCreateWithoutTransactionsInput {
    id?: number;
    accountNumber?: number;
    name: string;
    balance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
    accountCategory: keyof typeof AccountCategory;
    project?: InstanceType<typeof ProjectUncheckedCreateNestedOneWithoutAccountInput>;
    bankAccount?: InstanceType<typeof BankUncheckedCreateNestedOneWithoutAccountInput>;
}
export declare class AccountUncheckedCreateWithoutUserInput {
    id?: number;
    accountNumber?: number;
    name: string;
    balance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accountCategory: keyof typeof AccountCategory;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutAccountInput>;
    project?: InstanceType<typeof ProjectUncheckedCreateNestedOneWithoutAccountInput>;
    bankAccount?: InstanceType<typeof BankUncheckedCreateNestedOneWithoutAccountInput>;
}
export declare class AccountUncheckedCreateInput {
    id?: number;
    accountNumber?: number;
    name: string;
    balance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
    accountCategory: keyof typeof AccountCategory;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutAccountInput>;
    project?: InstanceType<typeof ProjectUncheckedCreateNestedOneWithoutAccountInput>;
    bankAccount?: InstanceType<typeof BankUncheckedCreateNestedOneWithoutAccountInput>;
}
export declare class AccountUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<AccountCreateWithoutUserInput>;
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
    upsert?: Array<AccountUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    update?: Array<AccountUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<AccountUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<AccountScalarWhereInput>;
}
export declare class AccountUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    balance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
}
export declare class AccountUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    balance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
}
export declare class AccountUncheckedUpdateWithoutBankAccountInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    balance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutAccountNestedInput>;
    project?: InstanceType<typeof ProjectUncheckedUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUncheckedUpdateWithoutProjectInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    balance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUncheckedUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUncheckedUpdateWithoutTransactionsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    balance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    project?: InstanceType<typeof ProjectUncheckedUpdateOneWithoutAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUncheckedUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    balance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutAccountNestedInput>;
    project?: InstanceType<typeof ProjectUncheckedUpdateOneWithoutAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUncheckedUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    balance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutAccountNestedInput>;
    project?: InstanceType<typeof ProjectUncheckedUpdateOneWithoutAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUncheckedUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUpdateManyMutationInput {
    accountNumber?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    balance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
}
export declare class AccountUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof AccountScalarWhereInput>;
    data: InstanceType<typeof AccountUpdateManyMutationInput>;
}
export declare class AccountUpdateManyWithoutUserNestedInput {
    create?: Array<AccountCreateWithoutUserInput>;
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
    upsert?: Array<AccountUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    update?: Array<AccountUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<AccountUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<AccountScalarWhereInput>;
}
export declare class AccountUpdateOneRequiredWithoutBankAccountNestedInput {
    create?: InstanceType<typeof AccountCreateWithoutBankAccountInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutBankAccountInput>;
    upsert?: InstanceType<typeof AccountUpsertWithoutBankAccountInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AccountUpdateToOneWithWhereWithoutBankAccountInput>;
}
export declare class AccountUpdateOneRequiredWithoutProjectNestedInput {
    create?: InstanceType<typeof AccountCreateWithoutProjectInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutProjectInput>;
    upsert?: InstanceType<typeof AccountUpsertWithoutProjectInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AccountUpdateToOneWithWhereWithoutProjectInput>;
}
export declare class AccountUpdateOneRequiredWithoutTransactionsNestedInput {
    create?: InstanceType<typeof AccountCreateWithoutTransactionsInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutTransactionsInput>;
    upsert?: InstanceType<typeof AccountUpsertWithoutTransactionsInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AccountUpdateToOneWithWhereWithoutTransactionsInput>;
}
export declare class AccountUpdateToOneWithWhereWithoutBankAccountInput {
    where?: InstanceType<typeof AccountWhereInput>;
    data: InstanceType<typeof AccountUpdateWithoutBankAccountInput>;
}
export declare class AccountUpdateToOneWithWhereWithoutProjectInput {
    where?: InstanceType<typeof AccountWhereInput>;
    data: InstanceType<typeof AccountUpdateWithoutProjectInput>;
}
export declare class AccountUpdateToOneWithWhereWithoutTransactionsInput {
    where?: InstanceType<typeof AccountWhereInput>;
    data: InstanceType<typeof AccountUpdateWithoutTransactionsInput>;
}
export declare class AccountUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    data: InstanceType<typeof AccountUpdateWithoutUserInput>;
}
export declare class AccountUpdateWithoutBankAccountInput {
    accountNumber?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    balance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutAccountsNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutAccountNestedInput>;
    project?: InstanceType<typeof ProjectUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUpdateWithoutProjectInput {
    accountNumber?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    balance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutAccountsNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUpdateWithoutTransactionsInput {
    accountNumber?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    balance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutAccountsNestedInput>;
    project?: InstanceType<typeof ProjectUpdateOneWithoutAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUpdateWithoutUserInput {
    accountNumber?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    balance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutAccountNestedInput>;
    project?: InstanceType<typeof ProjectUpdateOneWithoutAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUpdateInput {
    accountNumber?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    balance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutAccountsNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutAccountNestedInput>;
    project?: InstanceType<typeof ProjectUpdateOneWithoutAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    update: InstanceType<typeof AccountUpdateWithoutUserInput>;
    create: InstanceType<typeof AccountCreateWithoutUserInput>;
}
export declare class AccountUpsertWithoutBankAccountInput {
    update: InstanceType<typeof AccountUpdateWithoutBankAccountInput>;
    create: InstanceType<typeof AccountCreateWithoutBankAccountInput>;
    where?: InstanceType<typeof AccountWhereInput>;
}
export declare class AccountUpsertWithoutProjectInput {
    update: InstanceType<typeof AccountUpdateWithoutProjectInput>;
    create: InstanceType<typeof AccountCreateWithoutProjectInput>;
    where?: InstanceType<typeof AccountWhereInput>;
}
export declare class AccountUpsertWithoutTransactionsInput {
    update: InstanceType<typeof AccountUpdateWithoutTransactionsInput>;
    create: InstanceType<typeof AccountCreateWithoutTransactionsInput>;
    where?: InstanceType<typeof AccountWhereInput>;
}
export declare class AccountWhereUniqueInput {
    id?: number;
    AND?: Array<AccountWhereInput>;
    OR?: Array<AccountWhereInput>;
    NOT?: Array<AccountWhereInput>;
    accountNumber?: InstanceType<typeof IntNullableFilter>;
    name?: InstanceType<typeof StringFilter>;
    balance?: InstanceType<typeof FloatFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringFilter>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    transactions?: InstanceType<typeof TransactionListRelationFilter>;
    project?: InstanceType<typeof ProjectNullableRelationFilter>;
    bankAccount?: InstanceType<typeof BankNullableRelationFilter>;
}
export declare class AccountWhereInput {
    AND?: Array<AccountWhereInput>;
    OR?: Array<AccountWhereInput>;
    NOT?: Array<AccountWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    accountNumber?: InstanceType<typeof IntNullableFilter>;
    name?: InstanceType<typeof StringFilter>;
    balance?: InstanceType<typeof FloatFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringFilter>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    transactions?: InstanceType<typeof TransactionListRelationFilter>;
    project?: InstanceType<typeof ProjectNullableRelationFilter>;
    bankAccount?: InstanceType<typeof BankNullableRelationFilter>;
}
export declare class Account {
    id: number;
    accountNumber: number | null;
    name: string;
    balance: number;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    accountCategory: keyof typeof AccountCategory;
    user?: InstanceType<typeof User>;
    transactions?: Array<Transaction>;
    project?: InstanceType<typeof Project> | null;
    bankAccount?: InstanceType<typeof Bank> | null;
    _count?: InstanceType<typeof AccountCount>;
}
export declare class AggregateAccount {
    _count?: InstanceType<typeof AccountCountAggregate>;
    _avg?: InstanceType<typeof AccountAvgAggregate>;
    _sum?: InstanceType<typeof AccountSumAggregate>;
    _min?: InstanceType<typeof AccountMinAggregate>;
    _max?: InstanceType<typeof AccountMaxAggregate>;
}
export declare class CreateManyAccountArgs {
    data: Array<AccountCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneAccountArgs {
    data: InstanceType<typeof AccountCreateInput>;
}
export declare class DeleteManyAccountArgs {
    where?: InstanceType<typeof AccountWhereInput>;
}
export declare class DeleteOneAccountArgs {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class FindFirstAccountOrThrowArgs {
    where?: InstanceType<typeof AccountWhereInput>;
    orderBy?: Array<AccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}
export declare class FindFirstAccountArgs {
    where?: InstanceType<typeof AccountWhereInput>;
    orderBy?: Array<AccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}
export declare class FindManyAccountArgs {
    where?: InstanceType<typeof AccountWhereInput>;
    orderBy?: Array<AccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}
export declare class FindUniqueAccountOrThrowArgs {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class FindUniqueAccountArgs {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class UpdateManyAccountArgs {
    data: InstanceType<typeof AccountUpdateManyMutationInput>;
    where?: InstanceType<typeof AccountWhereInput>;
}
export declare class UpdateOneAccountArgs {
    data: InstanceType<typeof AccountUpdateInput>;
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class UpsertOneAccountArgs {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AccountCreateInput>;
    update: InstanceType<typeof AccountUpdateInput>;
}
export declare class AddressAggregateArgs {
    where?: InstanceType<typeof AddressWhereInput>;
    orderBy?: Array<AddressOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AddressCountAggregateInput>;
    _avg?: InstanceType<typeof AddressAvgAggregateInput>;
    _sum?: InstanceType<typeof AddressSumAggregateInput>;
    _min?: InstanceType<typeof AddressMinAggregateInput>;
    _max?: InstanceType<typeof AddressMaxAggregateInput>;
}
export declare class AddressAvgAggregateInput {
    id?: true;
    cityId?: true;
    districtId?: true;
    postalCodeId?: true;
}
export declare class AddressAvgAggregate {
    id?: number;
    cityId?: number;
    districtId?: number;
    postalCodeId?: number;
}
export declare class AddressAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
    postalCodeId?: keyof typeof SortOrder;
}
export declare class AddressCountAggregateInput {
    id?: true;
    name?: true;
    cityId?: true;
    districtId?: true;
    postalCodeId?: true;
    _all?: true;
}
export declare class AddressCountAggregate {
    id: number;
    name: number;
    cityId: number;
    districtId: number;
    postalCodeId: number;
    _all: number;
}
export declare class AddressCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
    postalCodeId?: keyof typeof SortOrder;
}
export declare class AddressCreateManyCityInputEnvelope {
    data: Array<AddressCreateManyCityInput>;
    skipDuplicates?: boolean;
}
export declare class AddressCreateManyCityInput {
    id?: number;
    name: string;
    districtId: number;
    postalCodeId: number;
}
export declare class AddressCreateManyDistrictInputEnvelope {
    data: Array<AddressCreateManyDistrictInput>;
    skipDuplicates?: boolean;
}
export declare class AddressCreateManyDistrictInput {
    id?: number;
    name: string;
    cityId: number;
    postalCodeId: number;
}
export declare class AddressCreateManyPostalCodeInputEnvelope {
    data: Array<AddressCreateManyPostalCodeInput>;
    skipDuplicates?: boolean;
}
export declare class AddressCreateManyPostalCodeInput {
    id?: number;
    name: string;
    cityId: number;
    districtId: number;
}
export declare class AddressCreateManyInput {
    id?: number;
    name: string;
    cityId: number;
    districtId: number;
    postalCodeId: number;
}
export declare class AddressCreateNestedManyWithoutCityInput {
    create?: Array<AddressCreateWithoutCityInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutCityInput>;
    createMany?: InstanceType<typeof AddressCreateManyCityInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
}
export declare class AddressCreateNestedManyWithoutDistrictInput {
    create?: Array<AddressCreateWithoutDistrictInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutDistrictInput>;
    createMany?: InstanceType<typeof AddressCreateManyDistrictInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
}
export declare class AddressCreateNestedManyWithoutPostalCodeInput {
    create?: Array<AddressCreateWithoutPostalCodeInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutPostalCodeInput>;
    createMany?: InstanceType<typeof AddressCreateManyPostalCodeInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
}
export declare class AddressCreateNestedOneWithoutHotelInput {
    create?: InstanceType<typeof AddressCreateWithoutHotelInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutHotelInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class AddressCreateNestedOneWithoutSchoolInput {
    create?: InstanceType<typeof AddressCreateWithoutSchoolInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutSchoolInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class AddressCreateNestedOneWithoutShippingInput {
    create?: InstanceType<typeof AddressCreateWithoutShippingInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutShippingInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class AddressCreateNestedOneWithoutUserInput {
    create?: InstanceType<typeof AddressCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutUserInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class AddressCreateOrConnectWithoutCityInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateWithoutCityInput>;
}
export declare class AddressCreateOrConnectWithoutDistrictInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateWithoutDistrictInput>;
}
export declare class AddressCreateOrConnectWithoutHotelInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateWithoutHotelInput>;
}
export declare class AddressCreateOrConnectWithoutPostalCodeInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateWithoutPostalCodeInput>;
}
export declare class AddressCreateOrConnectWithoutSchoolInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateWithoutSchoolInput>;
}
export declare class AddressCreateOrConnectWithoutShippingInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateWithoutShippingInput>;
}
export declare class AddressCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateWithoutUserInput>;
}
export declare class AddressCreateWithoutCityInput {
    name: string;
    district: InstanceType<typeof DistrictCreateNestedOneWithoutAddressInput>;
    postalCode: InstanceType<typeof PostalCodeCreateNestedOneWithoutAddressInput>;
    user?: InstanceType<typeof UserCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutAddressInput>;
}
export declare class AddressCreateWithoutDistrictInput {
    name: string;
    city: InstanceType<typeof CityCreateNestedOneWithoutAddressInput>;
    postalCode: InstanceType<typeof PostalCodeCreateNestedOneWithoutAddressInput>;
    user?: InstanceType<typeof UserCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutAddressInput>;
}
export declare class AddressCreateWithoutHotelInput {
    name: string;
    city: InstanceType<typeof CityCreateNestedOneWithoutAddressInput>;
    district: InstanceType<typeof DistrictCreateNestedOneWithoutAddressInput>;
    postalCode: InstanceType<typeof PostalCodeCreateNestedOneWithoutAddressInput>;
    user?: InstanceType<typeof UserCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutAddressInput>;
}
export declare class AddressCreateWithoutPostalCodeInput {
    name: string;
    city: InstanceType<typeof CityCreateNestedOneWithoutAddressInput>;
    district: InstanceType<typeof DistrictCreateNestedOneWithoutAddressInput>;
    user?: InstanceType<typeof UserCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutAddressInput>;
}
export declare class AddressCreateWithoutSchoolInput {
    name: string;
    city: InstanceType<typeof CityCreateNestedOneWithoutAddressInput>;
    district: InstanceType<typeof DistrictCreateNestedOneWithoutAddressInput>;
    postalCode: InstanceType<typeof PostalCodeCreateNestedOneWithoutAddressInput>;
    user?: InstanceType<typeof UserCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutAddressInput>;
}
export declare class AddressCreateWithoutShippingInput {
    name: string;
    city: InstanceType<typeof CityCreateNestedOneWithoutAddressInput>;
    district: InstanceType<typeof DistrictCreateNestedOneWithoutAddressInput>;
    postalCode: InstanceType<typeof PostalCodeCreateNestedOneWithoutAddressInput>;
    user?: InstanceType<typeof UserCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutAddressInput>;
}
export declare class AddressCreateWithoutUserInput {
    name: string;
    city: InstanceType<typeof CityCreateNestedOneWithoutAddressInput>;
    district: InstanceType<typeof DistrictCreateNestedOneWithoutAddressInput>;
    postalCode: InstanceType<typeof PostalCodeCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutAddressInput>;
}
export declare class AddressCreateInput {
    name: string;
    city: InstanceType<typeof CityCreateNestedOneWithoutAddressInput>;
    district: InstanceType<typeof DistrictCreateNestedOneWithoutAddressInput>;
    postalCode: InstanceType<typeof PostalCodeCreateNestedOneWithoutAddressInput>;
    user?: InstanceType<typeof UserCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutAddressInput>;
}
export declare class AddressGroupByArgs {
    where?: InstanceType<typeof AddressWhereInput>;
    orderBy?: Array<AddressOrderByWithAggregationInput>;
    by: Array<keyof typeof AddressScalarFieldEnum>;
    having?: InstanceType<typeof AddressScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AddressCountAggregateInput>;
    _avg?: InstanceType<typeof AddressAvgAggregateInput>;
    _sum?: InstanceType<typeof AddressSumAggregateInput>;
    _min?: InstanceType<typeof AddressMinAggregateInput>;
    _max?: InstanceType<typeof AddressMaxAggregateInput>;
}
export declare class AddressGroupBy {
    id: number;
    name: string;
    cityId: number;
    districtId: number;
    postalCodeId: number;
    _count?: InstanceType<typeof AddressCountAggregate>;
    _avg?: InstanceType<typeof AddressAvgAggregate>;
    _sum?: InstanceType<typeof AddressSumAggregate>;
    _min?: InstanceType<typeof AddressMinAggregate>;
    _max?: InstanceType<typeof AddressMaxAggregate>;
}
export declare class AddressListRelationFilter {
    every?: InstanceType<typeof AddressWhereInput>;
    some?: InstanceType<typeof AddressWhereInput>;
    none?: InstanceType<typeof AddressWhereInput>;
}
export declare class AddressMaxAggregateInput {
    id?: true;
    name?: true;
    cityId?: true;
    districtId?: true;
    postalCodeId?: true;
}
export declare class AddressMaxAggregate {
    id?: number;
    name?: string;
    cityId?: number;
    districtId?: number;
    postalCodeId?: number;
}
export declare class AddressMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
    postalCodeId?: keyof typeof SortOrder;
}
export declare class AddressMinAggregateInput {
    id?: true;
    name?: true;
    cityId?: true;
    districtId?: true;
    postalCodeId?: true;
}
export declare class AddressMinAggregate {
    id?: number;
    name?: string;
    cityId?: number;
    districtId?: number;
    postalCodeId?: number;
}
export declare class AddressMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
    postalCodeId?: keyof typeof SortOrder;
}
export declare class AddressOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class AddressOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
    postalCodeId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof AddressCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof AddressAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof AddressMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof AddressMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof AddressSumOrderByAggregateInput>;
}
export declare class AddressOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
    postalCodeId?: keyof typeof SortOrder;
    city?: InstanceType<typeof CityOrderByWithRelationInput>;
    district?: InstanceType<typeof DistrictOrderByWithRelationInput>;
    postalCode?: InstanceType<typeof PostalCodeOrderByWithRelationInput>;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    hotel?: InstanceType<typeof HotelOrderByWithRelationInput>;
    school?: InstanceType<typeof SchoolOrderByWithRelationInput>;
    Shipping?: InstanceType<typeof ShippingOrderByWithRelationInput>;
}
export declare class AddressRelationFilter {
    is?: InstanceType<typeof AddressWhereInput>;
    isNot?: InstanceType<typeof AddressWhereInput>;
}
export declare class AddressScalarWhereWithAggregatesInput {
    AND?: Array<AddressScalarWhereWithAggregatesInput>;
    OR?: Array<AddressScalarWhereWithAggregatesInput>;
    NOT?: Array<AddressScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    cityId?: InstanceType<typeof IntWithAggregatesFilter>;
    districtId?: InstanceType<typeof IntWithAggregatesFilter>;
    postalCodeId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class AddressScalarWhereInput {
    AND?: Array<AddressScalarWhereInput>;
    OR?: Array<AddressScalarWhereInput>;
    NOT?: Array<AddressScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    cityId?: InstanceType<typeof IntFilter>;
    districtId?: InstanceType<typeof IntFilter>;
    postalCodeId?: InstanceType<typeof IntFilter>;
}
export declare class AddressSumAggregateInput {
    id?: true;
    cityId?: true;
    districtId?: true;
    postalCodeId?: true;
}
export declare class AddressSumAggregate {
    id?: number;
    cityId?: number;
    districtId?: number;
    postalCodeId?: number;
}
export declare class AddressSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
    postalCodeId?: keyof typeof SortOrder;
}
export declare class AddressUncheckedCreateNestedManyWithoutCityInput {
    create?: Array<AddressCreateWithoutCityInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutCityInput>;
    createMany?: InstanceType<typeof AddressCreateManyCityInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
}
export declare class AddressUncheckedCreateNestedManyWithoutDistrictInput {
    create?: Array<AddressCreateWithoutDistrictInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutDistrictInput>;
    createMany?: InstanceType<typeof AddressCreateManyDistrictInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
}
export declare class AddressUncheckedCreateNestedManyWithoutPostalCodeInput {
    create?: Array<AddressCreateWithoutPostalCodeInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutPostalCodeInput>;
    createMany?: InstanceType<typeof AddressCreateManyPostalCodeInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
}
export declare class AddressUncheckedCreateWithoutCityInput {
    id?: number;
    name: string;
    districtId: number;
    postalCodeId: number;
    user?: InstanceType<typeof UserUncheckedCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelUncheckedCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolUncheckedCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutAddressInput>;
}
export declare class AddressUncheckedCreateWithoutDistrictInput {
    id?: number;
    name: string;
    cityId: number;
    postalCodeId: number;
    user?: InstanceType<typeof UserUncheckedCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelUncheckedCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolUncheckedCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutAddressInput>;
}
export declare class AddressUncheckedCreateWithoutHotelInput {
    id?: number;
    name: string;
    cityId: number;
    districtId: number;
    postalCodeId: number;
    user?: InstanceType<typeof UserUncheckedCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolUncheckedCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutAddressInput>;
}
export declare class AddressUncheckedCreateWithoutPostalCodeInput {
    id?: number;
    name: string;
    cityId: number;
    districtId: number;
    user?: InstanceType<typeof UserUncheckedCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelUncheckedCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolUncheckedCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutAddressInput>;
}
export declare class AddressUncheckedCreateWithoutSchoolInput {
    id?: number;
    name: string;
    cityId: number;
    districtId: number;
    postalCodeId: number;
    user?: InstanceType<typeof UserUncheckedCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelUncheckedCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutAddressInput>;
}
export declare class AddressUncheckedCreateWithoutShippingInput {
    id?: number;
    name: string;
    cityId: number;
    districtId: number;
    postalCodeId: number;
    user?: InstanceType<typeof UserUncheckedCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelUncheckedCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolUncheckedCreateNestedOneWithoutAddressInput>;
}
export declare class AddressUncheckedCreateWithoutUserInput {
    id?: number;
    name: string;
    cityId: number;
    districtId: number;
    postalCodeId: number;
    hotel?: InstanceType<typeof HotelUncheckedCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolUncheckedCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutAddressInput>;
}
export declare class AddressUncheckedCreateInput {
    id?: number;
    name: string;
    cityId: number;
    districtId: number;
    postalCodeId: number;
    user?: InstanceType<typeof UserUncheckedCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelUncheckedCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolUncheckedCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutAddressInput>;
}
export declare class AddressUncheckedUpdateManyWithoutCityNestedInput {
    create?: Array<AddressCreateWithoutCityInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutCityInput>;
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutCityInput>;
    createMany?: InstanceType<typeof AddressCreateManyCityInputEnvelope>;
    set?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    update?: Array<AddressUpdateWithWhereUniqueWithoutCityInput>;
    updateMany?: Array<AddressUpdateManyWithWhereWithoutCityInput>;
    deleteMany?: Array<AddressScalarWhereInput>;
}
export declare class AddressUncheckedUpdateManyWithoutCityInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    districtId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCodeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class AddressUncheckedUpdateManyWithoutDistrictNestedInput {
    create?: Array<AddressCreateWithoutDistrictInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutDistrictInput>;
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutDistrictInput>;
    createMany?: InstanceType<typeof AddressCreateManyDistrictInputEnvelope>;
    set?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    update?: Array<AddressUpdateWithWhereUniqueWithoutDistrictInput>;
    updateMany?: Array<AddressUpdateManyWithWhereWithoutDistrictInput>;
    deleteMany?: Array<AddressScalarWhereInput>;
}
export declare class AddressUncheckedUpdateManyWithoutDistrictInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCodeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class AddressUncheckedUpdateManyWithoutPostalCodeNestedInput {
    create?: Array<AddressCreateWithoutPostalCodeInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutPostalCodeInput>;
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutPostalCodeInput>;
    createMany?: InstanceType<typeof AddressCreateManyPostalCodeInputEnvelope>;
    set?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    update?: Array<AddressUpdateWithWhereUniqueWithoutPostalCodeInput>;
    updateMany?: Array<AddressUpdateManyWithWhereWithoutPostalCodeInput>;
    deleteMany?: Array<AddressScalarWhereInput>;
}
export declare class AddressUncheckedUpdateManyWithoutPostalCodeInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    districtId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class AddressUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    districtId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCodeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class AddressUncheckedUpdateWithoutCityInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    districtId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCodeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUncheckedUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUncheckedUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUncheckedUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUncheckedUpdateWithoutDistrictInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCodeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUncheckedUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUncheckedUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUncheckedUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUncheckedUpdateWithoutHotelInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    districtId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCodeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUncheckedUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUncheckedUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUncheckedUpdateWithoutPostalCodeInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    districtId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUncheckedUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUncheckedUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUncheckedUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUncheckedUpdateWithoutSchoolInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    districtId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCodeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUncheckedUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUncheckedUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUncheckedUpdateWithoutShippingInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    districtId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCodeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUncheckedUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUncheckedUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUncheckedUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    districtId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCodeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    hotel?: InstanceType<typeof HotelUncheckedUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUncheckedUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    districtId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCodeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUncheckedUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUncheckedUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUncheckedUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class AddressUpdateManyWithWhereWithoutCityInput {
    where: InstanceType<typeof AddressScalarWhereInput>;
    data: InstanceType<typeof AddressUpdateManyMutationInput>;
}
export declare class AddressUpdateManyWithWhereWithoutDistrictInput {
    where: InstanceType<typeof AddressScalarWhereInput>;
    data: InstanceType<typeof AddressUpdateManyMutationInput>;
}
export declare class AddressUpdateManyWithWhereWithoutPostalCodeInput {
    where: InstanceType<typeof AddressScalarWhereInput>;
    data: InstanceType<typeof AddressUpdateManyMutationInput>;
}
export declare class AddressUpdateManyWithoutCityNestedInput {
    create?: Array<AddressCreateWithoutCityInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutCityInput>;
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutCityInput>;
    createMany?: InstanceType<typeof AddressCreateManyCityInputEnvelope>;
    set?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    update?: Array<AddressUpdateWithWhereUniqueWithoutCityInput>;
    updateMany?: Array<AddressUpdateManyWithWhereWithoutCityInput>;
    deleteMany?: Array<AddressScalarWhereInput>;
}
export declare class AddressUpdateManyWithoutDistrictNestedInput {
    create?: Array<AddressCreateWithoutDistrictInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutDistrictInput>;
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutDistrictInput>;
    createMany?: InstanceType<typeof AddressCreateManyDistrictInputEnvelope>;
    set?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    update?: Array<AddressUpdateWithWhereUniqueWithoutDistrictInput>;
    updateMany?: Array<AddressUpdateManyWithWhereWithoutDistrictInput>;
    deleteMany?: Array<AddressScalarWhereInput>;
}
export declare class AddressUpdateManyWithoutPostalCodeNestedInput {
    create?: Array<AddressCreateWithoutPostalCodeInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutPostalCodeInput>;
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutPostalCodeInput>;
    createMany?: InstanceType<typeof AddressCreateManyPostalCodeInputEnvelope>;
    set?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    update?: Array<AddressUpdateWithWhereUniqueWithoutPostalCodeInput>;
    updateMany?: Array<AddressUpdateManyWithWhereWithoutPostalCodeInput>;
    deleteMany?: Array<AddressScalarWhereInput>;
}
export declare class AddressUpdateOneRequiredWithoutHotelNestedInput {
    create?: InstanceType<typeof AddressCreateWithoutHotelInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutHotelInput>;
    upsert?: InstanceType<typeof AddressUpsertWithoutHotelInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AddressUpdateToOneWithWhereWithoutHotelInput>;
}
export declare class AddressUpdateOneRequiredWithoutSchoolNestedInput {
    create?: InstanceType<typeof AddressCreateWithoutSchoolInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutSchoolInput>;
    upsert?: InstanceType<typeof AddressUpsertWithoutSchoolInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AddressUpdateToOneWithWhereWithoutSchoolInput>;
}
export declare class AddressUpdateOneRequiredWithoutShippingNestedInput {
    create?: InstanceType<typeof AddressCreateWithoutShippingInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutShippingInput>;
    upsert?: InstanceType<typeof AddressUpsertWithoutShippingInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AddressUpdateToOneWithWhereWithoutShippingInput>;
}
export declare class AddressUpdateOneRequiredWithoutUserNestedInput {
    create?: InstanceType<typeof AddressCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutUserInput>;
    upsert?: InstanceType<typeof AddressUpsertWithoutUserInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AddressUpdateToOneWithWhereWithoutUserInput>;
}
export declare class AddressUpdateToOneWithWhereWithoutHotelInput {
    where?: InstanceType<typeof AddressWhereInput>;
    data: InstanceType<typeof AddressUpdateWithoutHotelInput>;
}
export declare class AddressUpdateToOneWithWhereWithoutSchoolInput {
    where?: InstanceType<typeof AddressWhereInput>;
    data: InstanceType<typeof AddressUpdateWithoutSchoolInput>;
}
export declare class AddressUpdateToOneWithWhereWithoutShippingInput {
    where?: InstanceType<typeof AddressWhereInput>;
    data: InstanceType<typeof AddressUpdateWithoutShippingInput>;
}
export declare class AddressUpdateToOneWithWhereWithoutUserInput {
    where?: InstanceType<typeof AddressWhereInput>;
    data: InstanceType<typeof AddressUpdateWithoutUserInput>;
}
export declare class AddressUpdateWithWhereUniqueWithoutCityInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    data: InstanceType<typeof AddressUpdateWithoutCityInput>;
}
export declare class AddressUpdateWithWhereUniqueWithoutDistrictInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    data: InstanceType<typeof AddressUpdateWithoutDistrictInput>;
}
export declare class AddressUpdateWithWhereUniqueWithoutPostalCodeInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    data: InstanceType<typeof AddressUpdateWithoutPostalCodeInput>;
}
export declare class AddressUpdateWithoutCityInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    district?: InstanceType<typeof DistrictUpdateOneRequiredWithoutAddressNestedInput>;
    postalCode?: InstanceType<typeof PostalCodeUpdateOneRequiredWithoutAddressNestedInput>;
    user?: InstanceType<typeof UserUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUpdateWithoutDistrictInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutAddressNestedInput>;
    postalCode?: InstanceType<typeof PostalCodeUpdateOneRequiredWithoutAddressNestedInput>;
    user?: InstanceType<typeof UserUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUpdateWithoutHotelInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutAddressNestedInput>;
    district?: InstanceType<typeof DistrictUpdateOneRequiredWithoutAddressNestedInput>;
    postalCode?: InstanceType<typeof PostalCodeUpdateOneRequiredWithoutAddressNestedInput>;
    user?: InstanceType<typeof UserUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUpdateWithoutPostalCodeInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutAddressNestedInput>;
    district?: InstanceType<typeof DistrictUpdateOneRequiredWithoutAddressNestedInput>;
    user?: InstanceType<typeof UserUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUpdateWithoutSchoolInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutAddressNestedInput>;
    district?: InstanceType<typeof DistrictUpdateOneRequiredWithoutAddressNestedInput>;
    postalCode?: InstanceType<typeof PostalCodeUpdateOneRequiredWithoutAddressNestedInput>;
    user?: InstanceType<typeof UserUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUpdateWithoutShippingInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutAddressNestedInput>;
    district?: InstanceType<typeof DistrictUpdateOneRequiredWithoutAddressNestedInput>;
    postalCode?: InstanceType<typeof PostalCodeUpdateOneRequiredWithoutAddressNestedInput>;
    user?: InstanceType<typeof UserUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUpdateWithoutUserInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutAddressNestedInput>;
    district?: InstanceType<typeof DistrictUpdateOneRequiredWithoutAddressNestedInput>;
    postalCode?: InstanceType<typeof PostalCodeUpdateOneRequiredWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutAddressNestedInput>;
    district?: InstanceType<typeof DistrictUpdateOneRequiredWithoutAddressNestedInput>;
    postalCode?: InstanceType<typeof PostalCodeUpdateOneRequiredWithoutAddressNestedInput>;
    user?: InstanceType<typeof UserUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUpsertWithWhereUniqueWithoutCityInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    update: InstanceType<typeof AddressUpdateWithoutCityInput>;
    create: InstanceType<typeof AddressCreateWithoutCityInput>;
}
export declare class AddressUpsertWithWhereUniqueWithoutDistrictInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    update: InstanceType<typeof AddressUpdateWithoutDistrictInput>;
    create: InstanceType<typeof AddressCreateWithoutDistrictInput>;
}
export declare class AddressUpsertWithWhereUniqueWithoutPostalCodeInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    update: InstanceType<typeof AddressUpdateWithoutPostalCodeInput>;
    create: InstanceType<typeof AddressCreateWithoutPostalCodeInput>;
}
export declare class AddressUpsertWithoutHotelInput {
    update: InstanceType<typeof AddressUpdateWithoutHotelInput>;
    create: InstanceType<typeof AddressCreateWithoutHotelInput>;
    where?: InstanceType<typeof AddressWhereInput>;
}
export declare class AddressUpsertWithoutSchoolInput {
    update: InstanceType<typeof AddressUpdateWithoutSchoolInput>;
    create: InstanceType<typeof AddressCreateWithoutSchoolInput>;
    where?: InstanceType<typeof AddressWhereInput>;
}
export declare class AddressUpsertWithoutShippingInput {
    update: InstanceType<typeof AddressUpdateWithoutShippingInput>;
    create: InstanceType<typeof AddressCreateWithoutShippingInput>;
    where?: InstanceType<typeof AddressWhereInput>;
}
export declare class AddressUpsertWithoutUserInput {
    update: InstanceType<typeof AddressUpdateWithoutUserInput>;
    create: InstanceType<typeof AddressCreateWithoutUserInput>;
    where?: InstanceType<typeof AddressWhereInput>;
}
export declare class AddressWhereUniqueInput {
    id?: number;
    AND?: Array<AddressWhereInput>;
    OR?: Array<AddressWhereInput>;
    NOT?: Array<AddressWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    cityId?: InstanceType<typeof IntFilter>;
    districtId?: InstanceType<typeof IntFilter>;
    postalCodeId?: InstanceType<typeof IntFilter>;
    city?: InstanceType<typeof CityRelationFilter>;
    district?: InstanceType<typeof DistrictRelationFilter>;
    postalCode?: InstanceType<typeof PostalCodeRelationFilter>;
    user?: InstanceType<typeof UserNullableRelationFilter>;
    hotel?: InstanceType<typeof HotelNullableRelationFilter>;
    school?: InstanceType<typeof SchoolNullableRelationFilter>;
    Shipping?: InstanceType<typeof ShippingNullableRelationFilter>;
}
export declare class AddressWhereInput {
    AND?: Array<AddressWhereInput>;
    OR?: Array<AddressWhereInput>;
    NOT?: Array<AddressWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    cityId?: InstanceType<typeof IntFilter>;
    districtId?: InstanceType<typeof IntFilter>;
    postalCodeId?: InstanceType<typeof IntFilter>;
    city?: InstanceType<typeof CityRelationFilter>;
    district?: InstanceType<typeof DistrictRelationFilter>;
    postalCode?: InstanceType<typeof PostalCodeRelationFilter>;
    user?: InstanceType<typeof UserNullableRelationFilter>;
    hotel?: InstanceType<typeof HotelNullableRelationFilter>;
    school?: InstanceType<typeof SchoolNullableRelationFilter>;
    Shipping?: InstanceType<typeof ShippingNullableRelationFilter>;
}
export declare class Address {
    id: number;
    name: string;
    cityId: number;
    districtId: number;
    postalCodeId: number;
    city?: InstanceType<typeof City>;
    district?: InstanceType<typeof District>;
    postalCode?: InstanceType<typeof PostalCode>;
    user?: InstanceType<typeof User> | null;
    hotel?: InstanceType<typeof Hotel> | null;
    school?: InstanceType<typeof School> | null;
    Shipping?: InstanceType<typeof Shipping> | null;
}
export declare class AggregateAddress {
    _count?: InstanceType<typeof AddressCountAggregate>;
    _avg?: InstanceType<typeof AddressAvgAggregate>;
    _sum?: InstanceType<typeof AddressSumAggregate>;
    _min?: InstanceType<typeof AddressMinAggregate>;
    _max?: InstanceType<typeof AddressMaxAggregate>;
}
export declare class CreateManyAddressArgs {
    data: Array<AddressCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneAddressArgs {
    data: InstanceType<typeof AddressCreateInput>;
}
export declare class DeleteManyAddressArgs {
    where?: InstanceType<typeof AddressWhereInput>;
}
export declare class DeleteOneAddressArgs {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class FindFirstAddressOrThrowArgs {
    where?: InstanceType<typeof AddressWhereInput>;
    orderBy?: Array<AddressOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AddressScalarFieldEnum>;
}
export declare class FindFirstAddressArgs {
    where?: InstanceType<typeof AddressWhereInput>;
    orderBy?: Array<AddressOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AddressScalarFieldEnum>;
}
export declare class FindManyAddressArgs {
    where?: InstanceType<typeof AddressWhereInput>;
    orderBy?: Array<AddressOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AddressScalarFieldEnum>;
}
export declare class FindUniqueAddressOrThrowArgs {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class FindUniqueAddressArgs {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class UpdateManyAddressArgs {
    data: InstanceType<typeof AddressUpdateManyMutationInput>;
    where?: InstanceType<typeof AddressWhereInput>;
}
export declare class UpdateOneAddressArgs {
    data: InstanceType<typeof AddressUpdateInput>;
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class UpsertOneAddressArgs {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateInput>;
    update: InstanceType<typeof AddressUpdateInput>;
}
export declare class AggregateBank {
    _count?: InstanceType<typeof BankCountAggregate>;
    _avg?: InstanceType<typeof BankAvgAggregate>;
    _sum?: InstanceType<typeof BankSumAggregate>;
    _min?: InstanceType<typeof BankMinAggregate>;
    _max?: InstanceType<typeof BankMaxAggregate>;
}
export declare class BankAggregateArgs {
    where?: InstanceType<typeof BankWhereInput>;
    orderBy?: Array<BankOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof BankCountAggregateInput>;
    _avg?: InstanceType<typeof BankAvgAggregateInput>;
    _sum?: InstanceType<typeof BankSumAggregateInput>;
    _min?: InstanceType<typeof BankMinAggregateInput>;
    _max?: InstanceType<typeof BankMaxAggregateInput>;
}
export declare class BankAvgAggregateInput {
    id?: true;
    accountNumber?: true;
    accountId?: true;
}
export declare class BankAvgAggregate {
    id?: number;
    accountNumber?: number;
    accountId?: number;
}
export declare class BankAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class BankCountAggregateInput {
    id?: true;
    name?: true;
    logoUrl?: true;
    accountNumber?: true;
    accountId?: true;
    _all?: true;
}
export declare class BankCountAggregate {
    id: number;
    name: number;
    logoUrl: number;
    accountNumber: number;
    accountId: number;
    _all: number;
}
export declare class BankCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    logoUrl?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class BankCreateManyInput {
    id?: number;
    name: string;
    logoUrl: string;
    accountNumber: number;
    accountId: number;
}
export declare class BankCreateNestedOneWithoutAccountInput {
    create?: InstanceType<typeof BankCreateWithoutAccountInput>;
    connectOrCreate?: InstanceType<typeof BankCreateOrConnectWithoutAccountInput>;
    connect?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class BankCreateOrConnectWithoutAccountInput {
    where: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
    create: InstanceType<typeof BankCreateWithoutAccountInput>;
}
export declare class BankCreateWithoutAccountInput {
    name: string;
    logoUrl: string;
    accountNumber: number;
}
export declare class BankCreateInput {
    name: string;
    logoUrl: string;
    accountNumber: number;
    account: InstanceType<typeof AccountCreateNestedOneWithoutBankAccountInput>;
}
export declare class BankGroupByArgs {
    where?: InstanceType<typeof BankWhereInput>;
    orderBy?: Array<BankOrderByWithAggregationInput>;
    by: Array<keyof typeof BankScalarFieldEnum>;
    having?: InstanceType<typeof BankScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof BankCountAggregateInput>;
    _avg?: InstanceType<typeof BankAvgAggregateInput>;
    _sum?: InstanceType<typeof BankSumAggregateInput>;
    _min?: InstanceType<typeof BankMinAggregateInput>;
    _max?: InstanceType<typeof BankMaxAggregateInput>;
}
export declare class BankGroupBy {
    id: number;
    name: string;
    logoUrl: string;
    accountNumber: number;
    accountId: number;
    _count?: InstanceType<typeof BankCountAggregate>;
    _avg?: InstanceType<typeof BankAvgAggregate>;
    _sum?: InstanceType<typeof BankSumAggregate>;
    _min?: InstanceType<typeof BankMinAggregate>;
    _max?: InstanceType<typeof BankMaxAggregate>;
}
export declare class BankMaxAggregateInput {
    id?: true;
    name?: true;
    logoUrl?: true;
    accountNumber?: true;
    accountId?: true;
}
export declare class BankMaxAggregate {
    id?: number;
    name?: string;
    logoUrl?: string;
    accountNumber?: number;
    accountId?: number;
}
export declare class BankMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    logoUrl?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class BankMinAggregateInput {
    id?: true;
    name?: true;
    logoUrl?: true;
    accountNumber?: true;
    accountId?: true;
}
export declare class BankMinAggregate {
    id?: number;
    name?: string;
    logoUrl?: string;
    accountNumber?: number;
    accountId?: number;
}
export declare class BankMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    logoUrl?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class BankNullableRelationFilter {
    is?: InstanceType<typeof BankWhereInput>;
    isNot?: InstanceType<typeof BankWhereInput>;
}
export declare class BankOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    logoUrl?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof BankCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof BankAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof BankMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof BankMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof BankSumOrderByAggregateInput>;
}
export declare class BankOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    logoUrl?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    account?: InstanceType<typeof AccountOrderByWithRelationInput>;
}
export declare class BankScalarWhereWithAggregatesInput {
    AND?: Array<BankScalarWhereWithAggregatesInput>;
    OR?: Array<BankScalarWhereWithAggregatesInput>;
    NOT?: Array<BankScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    logoUrl?: InstanceType<typeof StringWithAggregatesFilter>;
    accountNumber?: InstanceType<typeof IntWithAggregatesFilter>;
    accountId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class BankSumAggregateInput {
    id?: true;
    accountNumber?: true;
    accountId?: true;
}
export declare class BankSumAggregate {
    id?: number;
    accountNumber?: number;
    accountId?: number;
}
export declare class BankSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class BankUncheckedCreateNestedOneWithoutAccountInput {
    create?: InstanceType<typeof BankCreateWithoutAccountInput>;
    connectOrCreate?: InstanceType<typeof BankCreateOrConnectWithoutAccountInput>;
    connect?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class BankUncheckedCreateWithoutAccountInput {
    id?: number;
    name: string;
    logoUrl: string;
    accountNumber: number;
}
export declare class BankUncheckedCreateInput {
    id?: number;
    name: string;
    logoUrl: string;
    accountNumber: number;
    accountId: number;
}
export declare class BankUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    logoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class BankUncheckedUpdateOneWithoutAccountNestedInput {
    create?: InstanceType<typeof BankCreateWithoutAccountInput>;
    connectOrCreate?: InstanceType<typeof BankCreateOrConnectWithoutAccountInput>;
    upsert?: InstanceType<typeof BankUpsertWithoutAccountInput>;
    disconnect?: InstanceType<typeof BankWhereInput>;
    delete?: InstanceType<typeof BankWhereInput>;
    connect?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
    update?: InstanceType<typeof BankUpdateToOneWithWhereWithoutAccountInput>;
}
export declare class BankUncheckedUpdateWithoutAccountInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    logoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class BankUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    logoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class BankUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    logoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class BankUpdateOneWithoutAccountNestedInput {
    create?: InstanceType<typeof BankCreateWithoutAccountInput>;
    connectOrCreate?: InstanceType<typeof BankCreateOrConnectWithoutAccountInput>;
    upsert?: InstanceType<typeof BankUpsertWithoutAccountInput>;
    disconnect?: InstanceType<typeof BankWhereInput>;
    delete?: InstanceType<typeof BankWhereInput>;
    connect?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
    update?: InstanceType<typeof BankUpdateToOneWithWhereWithoutAccountInput>;
}
export declare class BankUpdateToOneWithWhereWithoutAccountInput {
    where?: InstanceType<typeof BankWhereInput>;
    data: InstanceType<typeof BankUpdateWithoutAccountInput>;
}
export declare class BankUpdateWithoutAccountInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    logoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class BankUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    logoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    account?: InstanceType<typeof AccountUpdateOneRequiredWithoutBankAccountNestedInput>;
}
export declare class BankUpsertWithoutAccountInput {
    update: InstanceType<typeof BankUpdateWithoutAccountInput>;
    create: InstanceType<typeof BankCreateWithoutAccountInput>;
    where?: InstanceType<typeof BankWhereInput>;
}
export declare class BankWhereUniqueInput {
    id?: number;
    accountId?: number;
    AND?: Array<BankWhereInput>;
    OR?: Array<BankWhereInput>;
    NOT?: Array<BankWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    logoUrl?: InstanceType<typeof StringFilter>;
    accountNumber?: InstanceType<typeof IntFilter>;
    account?: InstanceType<typeof AccountRelationFilter>;
}
export declare class BankWhereInput {
    AND?: Array<BankWhereInput>;
    OR?: Array<BankWhereInput>;
    NOT?: Array<BankWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    logoUrl?: InstanceType<typeof StringFilter>;
    accountNumber?: InstanceType<typeof IntFilter>;
    accountId?: InstanceType<typeof IntFilter>;
    account?: InstanceType<typeof AccountRelationFilter>;
}
export declare class Bank {
    id: number;
    name: string;
    logoUrl: string;
    accountNumber: number;
    accountId: number;
    account?: InstanceType<typeof Account>;
}
export declare class CreateManyBankArgs {
    data: Array<BankCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneBankArgs {
    data: InstanceType<typeof BankCreateInput>;
}
export declare class DeleteManyBankArgs {
    where?: InstanceType<typeof BankWhereInput>;
}
export declare class DeleteOneBankArgs {
    where: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class FindFirstBankOrThrowArgs {
    where?: InstanceType<typeof BankWhereInput>;
    orderBy?: Array<BankOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BankScalarFieldEnum>;
}
export declare class FindFirstBankArgs {
    where?: InstanceType<typeof BankWhereInput>;
    orderBy?: Array<BankOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BankScalarFieldEnum>;
}
export declare class FindManyBankArgs {
    where?: InstanceType<typeof BankWhereInput>;
    orderBy?: Array<BankOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BankScalarFieldEnum>;
}
export declare class FindUniqueBankOrThrowArgs {
    where: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class FindUniqueBankArgs {
    where: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class UpdateManyBankArgs {
    data: InstanceType<typeof BankUpdateManyMutationInput>;
    where?: InstanceType<typeof BankWhereInput>;
}
export declare class UpdateOneBankArgs {
    data: InstanceType<typeof BankUpdateInput>;
    where: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class UpsertOneBankArgs {
    where: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
    create: InstanceType<typeof BankCreateInput>;
    update: InstanceType<typeof BankUpdateInput>;
}
export declare class AggregateCheckIn {
    _count?: InstanceType<typeof CheckInCountAggregate>;
    _avg?: InstanceType<typeof CheckInAvgAggregate>;
    _sum?: InstanceType<typeof CheckInSumAggregate>;
    _min?: InstanceType<typeof CheckInMinAggregate>;
    _max?: InstanceType<typeof CheckInMaxAggregate>;
}
export declare class CheckInAggregateArgs {
    where?: InstanceType<typeof CheckInWhereInput>;
    orderBy?: Array<CheckInOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CheckInCountAggregateInput>;
    _avg?: InstanceType<typeof CheckInAvgAggregateInput>;
    _sum?: InstanceType<typeof CheckInSumAggregateInput>;
    _min?: InstanceType<typeof CheckInMinAggregateInput>;
    _max?: InstanceType<typeof CheckInMaxAggregateInput>;
}
export declare class CheckInAvgAggregateInput {
    id?: true;
    hotelId?: true;
}
export declare class CheckInAvgAggregate {
    id?: number;
    hotelId?: number;
}
export declare class CheckInAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    hotelId?: keyof typeof SortOrder;
}
export declare class CheckInCountAggregateInput {
    id?: true;
    userId?: true;
    hotelId?: true;
    checkInAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class CheckInCountAggregate {
    id: number;
    userId: number;
    hotelId: number;
    checkInAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class CheckInCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    hotelId?: keyof typeof SortOrder;
    checkInAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CheckInCreateManyHotelInputEnvelope {
    data: Array<CheckInCreateManyHotelInput>;
    skipDuplicates?: boolean;
}
export declare class CheckInCreateManyHotelInput {
    id?: number;
    userId: string;
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CheckInCreateManyUserInputEnvelope {
    data: Array<CheckInCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class CheckInCreateManyUserInput {
    id?: number;
    hotelId: number;
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CheckInCreateManyInput {
    id?: number;
    userId: string;
    hotelId: number;
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CheckInCreateNestedManyWithoutHotelInput {
    create?: Array<CheckInCreateWithoutHotelInput>;
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutHotelInput>;
    createMany?: InstanceType<typeof CheckInCreateManyHotelInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
}
export declare class CheckInCreateNestedManyWithoutUserInput {
    create?: Array<CheckInCreateWithoutUserInput>;
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof CheckInCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
}
export declare class CheckInCreateOrConnectWithoutHotelInput {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CheckInCreateWithoutHotelInput>;
}
export declare class CheckInCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CheckInCreateWithoutUserInput>;
}
export declare class CheckInCreateWithoutHotelInput {
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutCheckInsInput>;
}
export declare class CheckInCreateWithoutUserInput {
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hotel: InstanceType<typeof HotelCreateNestedOneWithoutCheckInsInput>;
}
export declare class CheckInCreateInput {
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutCheckInsInput>;
    hotel: InstanceType<typeof HotelCreateNestedOneWithoutCheckInsInput>;
}
export declare class CheckInGroupByArgs {
    where?: InstanceType<typeof CheckInWhereInput>;
    orderBy?: Array<CheckInOrderByWithAggregationInput>;
    by: Array<keyof typeof CheckInScalarFieldEnum>;
    having?: InstanceType<typeof CheckInScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CheckInCountAggregateInput>;
    _avg?: InstanceType<typeof CheckInAvgAggregateInput>;
    _sum?: InstanceType<typeof CheckInSumAggregateInput>;
    _min?: InstanceType<typeof CheckInMinAggregateInput>;
    _max?: InstanceType<typeof CheckInMaxAggregateInput>;
}
export declare class CheckInGroupBy {
    id: number;
    userId: string;
    hotelId: number;
    checkInAt: Date | string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof CheckInCountAggregate>;
    _avg?: InstanceType<typeof CheckInAvgAggregate>;
    _sum?: InstanceType<typeof CheckInSumAggregate>;
    _min?: InstanceType<typeof CheckInMinAggregate>;
    _max?: InstanceType<typeof CheckInMaxAggregate>;
}
export declare class CheckInListRelationFilter {
    every?: InstanceType<typeof CheckInWhereInput>;
    some?: InstanceType<typeof CheckInWhereInput>;
    none?: InstanceType<typeof CheckInWhereInput>;
}
export declare class CheckInMaxAggregateInput {
    id?: true;
    userId?: true;
    hotelId?: true;
    checkInAt?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class CheckInMaxAggregate {
    id?: number;
    userId?: string;
    hotelId?: number;
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CheckInMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    hotelId?: keyof typeof SortOrder;
    checkInAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CheckInMinAggregateInput {
    id?: true;
    userId?: true;
    hotelId?: true;
    checkInAt?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class CheckInMinAggregate {
    id?: number;
    userId?: string;
    hotelId?: number;
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CheckInMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    hotelId?: keyof typeof SortOrder;
    checkInAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CheckInOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class CheckInOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    hotelId?: keyof typeof SortOrder;
    checkInAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof CheckInCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof CheckInAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof CheckInMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof CheckInMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof CheckInSumOrderByAggregateInput>;
}
export declare class CheckInOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    hotelId?: keyof typeof SortOrder;
    checkInAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    hotel?: InstanceType<typeof HotelOrderByWithRelationInput>;
}
export declare class CheckInScalarWhereWithAggregatesInput {
    AND?: Array<CheckInScalarWhereWithAggregatesInput>;
    OR?: Array<CheckInScalarWhereWithAggregatesInput>;
    NOT?: Array<CheckInScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    hotelId?: InstanceType<typeof IntWithAggregatesFilter>;
    checkInAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class CheckInScalarWhereInput {
    AND?: Array<CheckInScalarWhereInput>;
    OR?: Array<CheckInScalarWhereInput>;
    NOT?: Array<CheckInScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    userId?: InstanceType<typeof StringFilter>;
    hotelId?: InstanceType<typeof IntFilter>;
    checkInAt?: InstanceType<typeof DateTimeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class CheckInSumAggregateInput {
    id?: true;
    hotelId?: true;
}
export declare class CheckInSumAggregate {
    id?: number;
    hotelId?: number;
}
export declare class CheckInSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    hotelId?: keyof typeof SortOrder;
}
export declare class CheckInUncheckedCreateNestedManyWithoutHotelInput {
    create?: Array<CheckInCreateWithoutHotelInput>;
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutHotelInput>;
    createMany?: InstanceType<typeof CheckInCreateManyHotelInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
}
export declare class CheckInUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<CheckInCreateWithoutUserInput>;
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof CheckInCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
}
export declare class CheckInUncheckedCreateWithoutHotelInput {
    id?: number;
    userId: string;
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CheckInUncheckedCreateWithoutUserInput {
    id?: number;
    hotelId: number;
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CheckInUncheckedCreateInput {
    id?: number;
    userId: string;
    hotelId: number;
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CheckInUncheckedUpdateManyWithoutHotelNestedInput {
    create?: Array<CheckInCreateWithoutHotelInput>;
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutHotelInput>;
    upsert?: Array<CheckInUpsertWithWhereUniqueWithoutHotelInput>;
    createMany?: InstanceType<typeof CheckInCreateManyHotelInputEnvelope>;
    set?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    update?: Array<CheckInUpdateWithWhereUniqueWithoutHotelInput>;
    updateMany?: Array<CheckInUpdateManyWithWhereWithoutHotelInput>;
    deleteMany?: Array<CheckInScalarWhereInput>;
}
export declare class CheckInUncheckedUpdateManyWithoutHotelInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CheckInUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<CheckInCreateWithoutUserInput>;
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutUserInput>;
    upsert?: Array<CheckInUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof CheckInCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    update?: Array<CheckInUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<CheckInUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<CheckInScalarWhereInput>;
}
export declare class CheckInUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    hotelId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CheckInUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CheckInUncheckedUpdateWithoutHotelInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CheckInUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    hotelId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CheckInUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CheckInUpdateManyMutationInput {
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CheckInUpdateManyWithWhereWithoutHotelInput {
    where: InstanceType<typeof CheckInScalarWhereInput>;
    data: InstanceType<typeof CheckInUpdateManyMutationInput>;
}
export declare class CheckInUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof CheckInScalarWhereInput>;
    data: InstanceType<typeof CheckInUpdateManyMutationInput>;
}
export declare class CheckInUpdateManyWithoutHotelNestedInput {
    create?: Array<CheckInCreateWithoutHotelInput>;
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutHotelInput>;
    upsert?: Array<CheckInUpsertWithWhereUniqueWithoutHotelInput>;
    createMany?: InstanceType<typeof CheckInCreateManyHotelInputEnvelope>;
    set?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    update?: Array<CheckInUpdateWithWhereUniqueWithoutHotelInput>;
    updateMany?: Array<CheckInUpdateManyWithWhereWithoutHotelInput>;
    deleteMany?: Array<CheckInScalarWhereInput>;
}
export declare class CheckInUpdateManyWithoutUserNestedInput {
    create?: Array<CheckInCreateWithoutUserInput>;
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutUserInput>;
    upsert?: Array<CheckInUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof CheckInCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    update?: Array<CheckInUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<CheckInUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<CheckInScalarWhereInput>;
}
export declare class CheckInUpdateWithWhereUniqueWithoutHotelInput {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    data: InstanceType<typeof CheckInUpdateWithoutHotelInput>;
}
export declare class CheckInUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    data: InstanceType<typeof CheckInUpdateWithoutUserInput>;
}
export declare class CheckInUpdateWithoutHotelInput {
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutCheckInsNestedInput>;
}
export declare class CheckInUpdateWithoutUserInput {
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    hotel?: InstanceType<typeof HotelUpdateOneRequiredWithoutCheckInsNestedInput>;
}
export declare class CheckInUpdateInput {
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutCheckInsNestedInput>;
    hotel?: InstanceType<typeof HotelUpdateOneRequiredWithoutCheckInsNestedInput>;
}
export declare class CheckInUpsertWithWhereUniqueWithoutHotelInput {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    update: InstanceType<typeof CheckInUpdateWithoutHotelInput>;
    create: InstanceType<typeof CheckInCreateWithoutHotelInput>;
}
export declare class CheckInUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    update: InstanceType<typeof CheckInUpdateWithoutUserInput>;
    create: InstanceType<typeof CheckInCreateWithoutUserInput>;
}
export declare class CheckInWhereUniqueInput {
    id?: number;
    AND?: Array<CheckInWhereInput>;
    OR?: Array<CheckInWhereInput>;
    NOT?: Array<CheckInWhereInput>;
    userId?: InstanceType<typeof StringFilter>;
    hotelId?: InstanceType<typeof IntFilter>;
    checkInAt?: InstanceType<typeof DateTimeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    hotel?: InstanceType<typeof HotelRelationFilter>;
}
export declare class CheckInWhereInput {
    AND?: Array<CheckInWhereInput>;
    OR?: Array<CheckInWhereInput>;
    NOT?: Array<CheckInWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    userId?: InstanceType<typeof StringFilter>;
    hotelId?: InstanceType<typeof IntFilter>;
    checkInAt?: InstanceType<typeof DateTimeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    hotel?: InstanceType<typeof HotelRelationFilter>;
}
export declare class CheckIn {
    id: number;
    userId: string;
    hotelId: number;
    checkInAt: Date;
    createdAt: Date;
    updatedAt: Date;
    user?: InstanceType<typeof User>;
    hotel?: InstanceType<typeof Hotel>;
}
export declare class CreateManyCheckInArgs {
    data: Array<CheckInCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneCheckInArgs {
    data: InstanceType<typeof CheckInCreateInput>;
}
export declare class DeleteManyCheckInArgs {
    where?: InstanceType<typeof CheckInWhereInput>;
}
export declare class DeleteOneCheckInArgs {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
}
export declare class FindFirstCheckInOrThrowArgs {
    where?: InstanceType<typeof CheckInWhereInput>;
    orderBy?: Array<CheckInOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CheckInScalarFieldEnum>;
}
export declare class FindFirstCheckInArgs {
    where?: InstanceType<typeof CheckInWhereInput>;
    orderBy?: Array<CheckInOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CheckInScalarFieldEnum>;
}
export declare class FindManyCheckInArgs {
    where?: InstanceType<typeof CheckInWhereInput>;
    orderBy?: Array<CheckInOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CheckInScalarFieldEnum>;
}
export declare class FindUniqueCheckInOrThrowArgs {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
}
export declare class FindUniqueCheckInArgs {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
}
export declare class UpdateManyCheckInArgs {
    data: InstanceType<typeof CheckInUpdateManyMutationInput>;
    where?: InstanceType<typeof CheckInWhereInput>;
}
export declare class UpdateOneCheckInArgs {
    data: InstanceType<typeof CheckInUpdateInput>;
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
}
export declare class UpsertOneCheckInArgs {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CheckInCreateInput>;
    update: InstanceType<typeof CheckInUpdateInput>;
}
export declare class AggregateCity {
    _count?: InstanceType<typeof CityCountAggregate>;
    _avg?: InstanceType<typeof CityAvgAggregate>;
    _sum?: InstanceType<typeof CitySumAggregate>;
    _min?: InstanceType<typeof CityMinAggregate>;
    _max?: InstanceType<typeof CityMaxAggregate>;
}
export declare class CityAggregateArgs {
    where?: InstanceType<typeof CityWhereInput>;
    orderBy?: Array<CityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CityCountAggregateInput>;
    _avg?: InstanceType<typeof CityAvgAggregateInput>;
    _sum?: InstanceType<typeof CitySumAggregateInput>;
    _min?: InstanceType<typeof CityMinAggregateInput>;
    _max?: InstanceType<typeof CityMaxAggregateInput>;
}
export declare class CityAvgAggregateInput {
    id?: true;
}
export declare class CityAvgAggregate {
    id?: number;
}
export declare class CityAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class CityCountAggregateInput {
    id?: true;
    name?: true;
    _all?: true;
}
export declare class CityCountAggregate {
    id: number;
    name: number;
    _all: number;
}
export declare class CityCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class CityCount {
    address?: number;
}
export declare class CityCreateManyInput {
    id?: number;
    name: string;
}
export declare class CityCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof CityCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
export declare class CityCreateOrConnectWithoutAddressInput {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CityCreateWithoutAddressInput>;
}
export declare class CityCreateWithoutAddressInput {
    name: string;
}
export declare class CityCreateInput {
    name: string;
    address?: InstanceType<typeof AddressCreateNestedManyWithoutCityInput>;
}
export declare class CityGroupByArgs {
    where?: InstanceType<typeof CityWhereInput>;
    orderBy?: Array<CityOrderByWithAggregationInput>;
    by: Array<keyof typeof CityScalarFieldEnum>;
    having?: InstanceType<typeof CityScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CityCountAggregateInput>;
    _avg?: InstanceType<typeof CityAvgAggregateInput>;
    _sum?: InstanceType<typeof CitySumAggregateInput>;
    _min?: InstanceType<typeof CityMinAggregateInput>;
    _max?: InstanceType<typeof CityMaxAggregateInput>;
}
export declare class CityGroupBy {
    id: number;
    name: string;
    _count?: InstanceType<typeof CityCountAggregate>;
    _avg?: InstanceType<typeof CityAvgAggregate>;
    _sum?: InstanceType<typeof CitySumAggregate>;
    _min?: InstanceType<typeof CityMinAggregate>;
    _max?: InstanceType<typeof CityMaxAggregate>;
}
export declare class CityMaxAggregateInput {
    id?: true;
    name?: true;
}
export declare class CityMaxAggregate {
    id?: number;
    name?: string;
}
export declare class CityMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class CityMinAggregateInput {
    id?: true;
    name?: true;
}
export declare class CityMinAggregate {
    id?: number;
    name?: string;
}
export declare class CityMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class CityOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    _count?: InstanceType<typeof CityCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof CityAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof CityMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof CityMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof CitySumOrderByAggregateInput>;
}
export declare class CityOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    address?: InstanceType<typeof AddressOrderByRelationAggregateInput>;
}
export declare class CityRelationFilter {
    is?: InstanceType<typeof CityWhereInput>;
    isNot?: InstanceType<typeof CityWhereInput>;
}
export declare class CityScalarWhereWithAggregatesInput {
    AND?: Array<CityScalarWhereWithAggregatesInput>;
    OR?: Array<CityScalarWhereWithAggregatesInput>;
    NOT?: Array<CityScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class CitySumAggregateInput {
    id?: true;
}
export declare class CitySumAggregate {
    id?: number;
}
export declare class CitySumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class CityUncheckedCreateWithoutAddressInput {
    id?: number;
    name: string;
}
export declare class CityUncheckedCreateInput {
    id?: number;
    name: string;
    address?: InstanceType<typeof AddressUncheckedCreateNestedManyWithoutCityInput>;
}
export declare class CityUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CityUncheckedUpdateWithoutAddressInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CityUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUncheckedUpdateManyWithoutCityNestedInput>;
}
export declare class CityUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CityUpdateOneRequiredWithoutAddressNestedInput {
    create?: InstanceType<typeof CityCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof CityUpsertWithoutAddressInput>;
    connect?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof CityUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class CityUpdateToOneWithWhereWithoutAddressInput {
    where?: InstanceType<typeof CityWhereInput>;
    data: InstanceType<typeof CityUpdateWithoutAddressInput>;
}
export declare class CityUpdateWithoutAddressInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CityUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateManyWithoutCityNestedInput>;
}
export declare class CityUpsertWithoutAddressInput {
    update: InstanceType<typeof CityUpdateWithoutAddressInput>;
    create: InstanceType<typeof CityCreateWithoutAddressInput>;
    where?: InstanceType<typeof CityWhereInput>;
}
export declare class CityWhereUniqueInput {
    id?: number;
    AND?: Array<CityWhereInput>;
    OR?: Array<CityWhereInput>;
    NOT?: Array<CityWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    address?: InstanceType<typeof AddressListRelationFilter>;
}
export declare class CityWhereInput {
    AND?: Array<CityWhereInput>;
    OR?: Array<CityWhereInput>;
    NOT?: Array<CityWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    address?: InstanceType<typeof AddressListRelationFilter>;
}
export declare class City {
    id: number;
    name: string;
    address?: Array<Address>;
    _count?: InstanceType<typeof CityCount>;
}
export declare class CreateManyCityArgs {
    data: Array<CityCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneCityArgs {
    data: InstanceType<typeof CityCreateInput>;
}
export declare class DeleteManyCityArgs {
    where?: InstanceType<typeof CityWhereInput>;
}
export declare class DeleteOneCityArgs {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
export declare class FindFirstCityOrThrowArgs {
    where?: InstanceType<typeof CityWhereInput>;
    orderBy?: Array<CityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CityScalarFieldEnum>;
}
export declare class FindFirstCityArgs {
    where?: InstanceType<typeof CityWhereInput>;
    orderBy?: Array<CityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CityScalarFieldEnum>;
}
export declare class FindManyCityArgs {
    where?: InstanceType<typeof CityWhereInput>;
    orderBy?: Array<CityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CityScalarFieldEnum>;
}
export declare class FindUniqueCityOrThrowArgs {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
export declare class FindUniqueCityArgs {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
export declare class UpdateManyCityArgs {
    data: InstanceType<typeof CityUpdateManyMutationInput>;
    where?: InstanceType<typeof CityWhereInput>;
}
export declare class UpdateOneCityArgs {
    data: InstanceType<typeof CityUpdateInput>;
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
export declare class UpsertOneCityArgs {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CityCreateInput>;
    update: InstanceType<typeof CityUpdateInput>;
}
export declare class AggregateDistrict {
    _count?: InstanceType<typeof DistrictCountAggregate>;
    _avg?: InstanceType<typeof DistrictAvgAggregate>;
    _sum?: InstanceType<typeof DistrictSumAggregate>;
    _min?: InstanceType<typeof DistrictMinAggregate>;
    _max?: InstanceType<typeof DistrictMaxAggregate>;
}
export declare class CreateManyDistrictArgs {
    data: Array<DistrictCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneDistrictArgs {
    data: InstanceType<typeof DistrictCreateInput>;
}
export declare class DeleteManyDistrictArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
}
export declare class DeleteOneDistrictArgs {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
export declare class DistrictAggregateArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
    orderBy?: Array<DistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DistrictCountAggregateInput>;
    _avg?: InstanceType<typeof DistrictAvgAggregateInput>;
    _sum?: InstanceType<typeof DistrictSumAggregateInput>;
    _min?: InstanceType<typeof DistrictMinAggregateInput>;
    _max?: InstanceType<typeof DistrictMaxAggregateInput>;
}
export declare class DistrictAvgAggregateInput {
    id?: true;
}
export declare class DistrictAvgAggregate {
    id?: number;
}
export declare class DistrictAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class DistrictCountAggregateInput {
    id?: true;
    name?: true;
    _all?: true;
}
export declare class DistrictCountAggregate {
    id: number;
    name: number;
    _all: number;
}
export declare class DistrictCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class DistrictCount {
    address?: number;
}
export declare class DistrictCreateManyInput {
    id?: number;
    name: string;
}
export declare class DistrictCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof DistrictCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof DistrictCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
export declare class DistrictCreateOrConnectWithoutAddressInput {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DistrictCreateWithoutAddressInput>;
}
export declare class DistrictCreateWithoutAddressInput {
    name: string;
}
export declare class DistrictCreateInput {
    name: string;
    address?: InstanceType<typeof AddressCreateNestedManyWithoutDistrictInput>;
}
export declare class DistrictGroupByArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
    orderBy?: Array<DistrictOrderByWithAggregationInput>;
    by: Array<keyof typeof DistrictScalarFieldEnum>;
    having?: InstanceType<typeof DistrictScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DistrictCountAggregateInput>;
    _avg?: InstanceType<typeof DistrictAvgAggregateInput>;
    _sum?: InstanceType<typeof DistrictSumAggregateInput>;
    _min?: InstanceType<typeof DistrictMinAggregateInput>;
    _max?: InstanceType<typeof DistrictMaxAggregateInput>;
}
export declare class DistrictGroupBy {
    id: number;
    name: string;
    _count?: InstanceType<typeof DistrictCountAggregate>;
    _avg?: InstanceType<typeof DistrictAvgAggregate>;
    _sum?: InstanceType<typeof DistrictSumAggregate>;
    _min?: InstanceType<typeof DistrictMinAggregate>;
    _max?: InstanceType<typeof DistrictMaxAggregate>;
}
export declare class DistrictMaxAggregateInput {
    id?: true;
    name?: true;
}
export declare class DistrictMaxAggregate {
    id?: number;
    name?: string;
}
export declare class DistrictMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class DistrictMinAggregateInput {
    id?: true;
    name?: true;
}
export declare class DistrictMinAggregate {
    id?: number;
    name?: string;
}
export declare class DistrictMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class DistrictOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    _count?: InstanceType<typeof DistrictCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof DistrictAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof DistrictMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof DistrictMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof DistrictSumOrderByAggregateInput>;
}
export declare class DistrictOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    address?: InstanceType<typeof AddressOrderByRelationAggregateInput>;
}
export declare class DistrictRelationFilter {
    is?: InstanceType<typeof DistrictWhereInput>;
    isNot?: InstanceType<typeof DistrictWhereInput>;
}
export declare class DistrictScalarWhereWithAggregatesInput {
    AND?: Array<DistrictScalarWhereWithAggregatesInput>;
    OR?: Array<DistrictScalarWhereWithAggregatesInput>;
    NOT?: Array<DistrictScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class DistrictSumAggregateInput {
    id?: true;
}
export declare class DistrictSumAggregate {
    id?: number;
}
export declare class DistrictSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class DistrictUncheckedCreateWithoutAddressInput {
    id?: number;
    name: string;
}
export declare class DistrictUncheckedCreateInput {
    id?: number;
    name: string;
    address?: InstanceType<typeof AddressUncheckedCreateNestedManyWithoutDistrictInput>;
}
export declare class DistrictUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class DistrictUncheckedUpdateWithoutAddressInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class DistrictUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUncheckedUpdateManyWithoutDistrictNestedInput>;
}
export declare class DistrictUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class DistrictUpdateOneRequiredWithoutAddressNestedInput {
    create?: InstanceType<typeof DistrictCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof DistrictCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof DistrictUpsertWithoutAddressInput>;
    connect?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof DistrictUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class DistrictUpdateToOneWithWhereWithoutAddressInput {
    where?: InstanceType<typeof DistrictWhereInput>;
    data: InstanceType<typeof DistrictUpdateWithoutAddressInput>;
}
export declare class DistrictUpdateWithoutAddressInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class DistrictUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateManyWithoutDistrictNestedInput>;
}
export declare class DistrictUpsertWithoutAddressInput {
    update: InstanceType<typeof DistrictUpdateWithoutAddressInput>;
    create: InstanceType<typeof DistrictCreateWithoutAddressInput>;
    where?: InstanceType<typeof DistrictWhereInput>;
}
export declare class DistrictWhereUniqueInput {
    id?: number;
    AND?: Array<DistrictWhereInput>;
    OR?: Array<DistrictWhereInput>;
    NOT?: Array<DistrictWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    address?: InstanceType<typeof AddressListRelationFilter>;
}
export declare class DistrictWhereInput {
    AND?: Array<DistrictWhereInput>;
    OR?: Array<DistrictWhereInput>;
    NOT?: Array<DistrictWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    address?: InstanceType<typeof AddressListRelationFilter>;
}
export declare class District {
    id: number;
    name: string;
    address?: Array<Address>;
    _count?: InstanceType<typeof DistrictCount>;
}
export declare class FindFirstDistrictOrThrowArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
    orderBy?: Array<DistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DistrictScalarFieldEnum>;
}
export declare class FindFirstDistrictArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
    orderBy?: Array<DistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DistrictScalarFieldEnum>;
}
export declare class FindManyDistrictArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
    orderBy?: Array<DistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DistrictScalarFieldEnum>;
}
export declare class FindUniqueDistrictOrThrowArgs {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
export declare class FindUniqueDistrictArgs {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
export declare class UpdateManyDistrictArgs {
    data: InstanceType<typeof DistrictUpdateManyMutationInput>;
    where?: InstanceType<typeof DistrictWhereInput>;
}
export declare class UpdateOneDistrictArgs {
    data: InstanceType<typeof DistrictUpdateInput>;
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
export declare class UpsertOneDistrictArgs {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DistrictCreateInput>;
    update: InstanceType<typeof DistrictUpdateInput>;
}
export declare class AggregateFaq {
    _count?: InstanceType<typeof FaqCountAggregate>;
    _avg?: InstanceType<typeof FaqAvgAggregate>;
    _sum?: InstanceType<typeof FaqSumAggregate>;
    _min?: InstanceType<typeof FaqMinAggregate>;
    _max?: InstanceType<typeof FaqMaxAggregate>;
}
export declare class CreateManyFaqArgs {
    data: Array<FaqCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneFaqArgs {
    data: InstanceType<typeof FaqCreateInput>;
}
export declare class DeleteManyFaqArgs {
    where?: InstanceType<typeof FaqWhereInput>;
}
export declare class DeleteOneFaqArgs {
    where: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
}
export declare class FaqAggregateArgs {
    where?: InstanceType<typeof FaqWhereInput>;
    orderBy?: Array<FaqOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof FaqCountAggregateInput>;
    _avg?: InstanceType<typeof FaqAvgAggregateInput>;
    _sum?: InstanceType<typeof FaqSumAggregateInput>;
    _min?: InstanceType<typeof FaqMinAggregateInput>;
    _max?: InstanceType<typeof FaqMaxAggregateInput>;
}
export declare class FaqAvgAggregateInput {
    id?: true;
}
export declare class FaqAvgAggregate {
    id?: number;
}
export declare class FaqAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class FaqCountAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class FaqCountAggregate {
    id: number;
    name: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class FaqCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class FaqCreateManyInput {
    id?: number;
    name: string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FaqCreateInput {
    name: string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FaqGroupByArgs {
    where?: InstanceType<typeof FaqWhereInput>;
    orderBy?: Array<FaqOrderByWithAggregationInput>;
    by: Array<keyof typeof FaqScalarFieldEnum>;
    having?: InstanceType<typeof FaqScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof FaqCountAggregateInput>;
    _avg?: InstanceType<typeof FaqAvgAggregateInput>;
    _sum?: InstanceType<typeof FaqSumAggregateInput>;
    _min?: InstanceType<typeof FaqMinAggregateInput>;
    _max?: InstanceType<typeof FaqMaxAggregateInput>;
}
export declare class FaqGroupBy {
    id: number;
    name: string;
    description: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof FaqCountAggregate>;
    _avg?: InstanceType<typeof FaqAvgAggregate>;
    _sum?: InstanceType<typeof FaqSumAggregate>;
    _min?: InstanceType<typeof FaqMinAggregate>;
    _max?: InstanceType<typeof FaqMaxAggregate>;
}
export declare class FaqMaxAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class FaqMaxAggregate {
    id?: number;
    name?: string;
    description?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FaqMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class FaqMinAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class FaqMinAggregate {
    id?: number;
    name?: string;
    description?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FaqMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class FaqOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof FaqCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof FaqAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof FaqMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof FaqMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof FaqSumOrderByAggregateInput>;
}
export declare class FaqOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class FaqScalarWhereWithAggregatesInput {
    AND?: Array<FaqScalarWhereWithAggregatesInput>;
    OR?: Array<FaqScalarWhereWithAggregatesInput>;
    NOT?: Array<FaqScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class FaqSumAggregateInput {
    id?: true;
}
export declare class FaqSumAggregate {
    id?: number;
}
export declare class FaqSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class FaqUncheckedCreateInput {
    id?: number;
    name: string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FaqUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class FaqUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class FaqUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class FaqUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class FaqWhereUniqueInput {
    id?: number;
    AND?: Array<FaqWhereInput>;
    OR?: Array<FaqWhereInput>;
    NOT?: Array<FaqWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class FaqWhereInput {
    AND?: Array<FaqWhereInput>;
    OR?: Array<FaqWhereInput>;
    NOT?: Array<FaqWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class Faq {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class FindFirstFaqOrThrowArgs {
    where?: InstanceType<typeof FaqWhereInput>;
    orderBy?: Array<FaqOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof FaqScalarFieldEnum>;
}
export declare class FindFirstFaqArgs {
    where?: InstanceType<typeof FaqWhereInput>;
    orderBy?: Array<FaqOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof FaqScalarFieldEnum>;
}
export declare class FindManyFaqArgs {
    where?: InstanceType<typeof FaqWhereInput>;
    orderBy?: Array<FaqOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof FaqScalarFieldEnum>;
}
export declare class FindUniqueFaqOrThrowArgs {
    where: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
}
export declare class FindUniqueFaqArgs {
    where: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
}
export declare class UpdateManyFaqArgs {
    data: InstanceType<typeof FaqUpdateManyMutationInput>;
    where?: InstanceType<typeof FaqWhereInput>;
}
export declare class UpdateOneFaqArgs {
    data: InstanceType<typeof FaqUpdateInput>;
    where: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
}
export declare class UpsertOneFaqArgs {
    where: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
    create: InstanceType<typeof FaqCreateInput>;
    update: InstanceType<typeof FaqUpdateInput>;
}
export declare class AggregateFile {
    _count?: InstanceType<typeof FileCountAggregate>;
    _avg?: InstanceType<typeof FileAvgAggregate>;
    _sum?: InstanceType<typeof FileSumAggregate>;
    _min?: InstanceType<typeof FileMinAggregate>;
    _max?: InstanceType<typeof FileMaxAggregate>;
}
export declare class CreateManyFileArgs {
    data: Array<FileCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneFileArgs {
    data: InstanceType<typeof FileCreateInput>;
}
export declare class DeleteManyFileArgs {
    where?: InstanceType<typeof FileWhereInput>;
}
export declare class DeleteOneFileArgs {
    where: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
}
export declare class FileAggregateArgs {
    where?: InstanceType<typeof FileWhereInput>;
    orderBy?: Array<FileOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof FileCountAggregateInput>;
    _avg?: InstanceType<typeof FileAvgAggregateInput>;
    _sum?: InstanceType<typeof FileSumAggregateInput>;
    _min?: InstanceType<typeof FileMinAggregateInput>;
    _max?: InstanceType<typeof FileMaxAggregateInput>;
}
export declare class FileAvgAggregateInput {
    id?: true;
    filesize?: true;
}
export declare class FileAvgAggregate {
    id?: number;
    filesize?: number;
}
export declare class FileAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
}
export declare class FileCountAggregateInput {
    id?: true;
    fileType?: true;
    filesize?: true;
    name?: true;
    description?: true;
    url?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class FileCountAggregate {
    id: number;
    fileType: number;
    filesize: number;
    name: number;
    description: number;
    url: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class FileCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class FileCreateManyCreatedByInputEnvelope {
    data: Array<FileCreateManyCreatedByInput>;
    skipDuplicates?: boolean;
}
export declare class FileCreateManyCreatedByInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize: number;
    name: string;
    description: string;
    url: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FileCreateManyInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize: number;
    name: string;
    description: string;
    url: string;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FileCreateNestedManyWithoutCreatedByInput {
    create?: Array<FileCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<FileCreateOrConnectWithoutCreatedByInput>;
    createMany?: InstanceType<typeof FileCreateManyCreatedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
}
export declare class FileCreateOrConnectWithoutCreatedByInput {
    where: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
    create: InstanceType<typeof FileCreateWithoutCreatedByInput>;
}
export declare class FileCreateWithoutCreatedByInput {
    fileType: keyof typeof FileType;
    filesize: number;
    name: string;
    description: string;
    url: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FileCreateInput {
    fileType: keyof typeof FileType;
    filesize: number;
    name: string;
    description: string;
    url: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutFilesCreatedInput>;
}
export declare class FileGroupByArgs {
    where?: InstanceType<typeof FileWhereInput>;
    orderBy?: Array<FileOrderByWithAggregationInput>;
    by: Array<keyof typeof FileScalarFieldEnum>;
    having?: InstanceType<typeof FileScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof FileCountAggregateInput>;
    _avg?: InstanceType<typeof FileAvgAggregateInput>;
    _sum?: InstanceType<typeof FileSumAggregateInput>;
    _min?: InstanceType<typeof FileMinAggregateInput>;
    _max?: InstanceType<typeof FileMaxAggregateInput>;
}
export declare class FileGroupBy {
    id: number;
    fileType: keyof typeof FileType;
    filesize: number;
    name: string;
    description: string;
    url: string;
    createdById: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof FileCountAggregate>;
    _avg?: InstanceType<typeof FileAvgAggregate>;
    _sum?: InstanceType<typeof FileSumAggregate>;
    _min?: InstanceType<typeof FileMinAggregate>;
    _max?: InstanceType<typeof FileMaxAggregate>;
}
export declare class FileListRelationFilter {
    every?: InstanceType<typeof FileWhereInput>;
    some?: InstanceType<typeof FileWhereInput>;
    none?: InstanceType<typeof FileWhereInput>;
}
export declare class FileMaxAggregateInput {
    id?: true;
    fileType?: true;
    filesize?: true;
    name?: true;
    description?: true;
    url?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class FileMaxAggregate {
    id?: number;
    fileType?: keyof typeof FileType;
    filesize?: number;
    name?: string;
    description?: string;
    url?: string;
    createdById?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FileMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class FileMinAggregateInput {
    id?: true;
    fileType?: true;
    filesize?: true;
    name?: true;
    description?: true;
    url?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class FileMinAggregate {
    id?: number;
    fileType?: keyof typeof FileType;
    filesize?: number;
    name?: string;
    description?: string;
    url?: string;
    createdById?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FileMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class FileOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class FileOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof FileCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof FileAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof FileMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof FileMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof FileSumOrderByAggregateInput>;
}
export declare class FileOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    createdBy?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class FileScalarWhereWithAggregatesInput {
    AND?: Array<FileScalarWhereWithAggregatesInput>;
    OR?: Array<FileScalarWhereWithAggregatesInput>;
    NOT?: Array<FileScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    fileType?: InstanceType<typeof EnumFileTypeWithAggregatesFilter>;
    filesize?: InstanceType<typeof FloatWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    url?: InstanceType<typeof StringWithAggregatesFilter>;
    createdById?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class FileScalarWhereInput {
    AND?: Array<FileScalarWhereInput>;
    OR?: Array<FileScalarWhereInput>;
    NOT?: Array<FileScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    fileType?: InstanceType<typeof EnumFileTypeFilter>;
    filesize?: InstanceType<typeof FloatFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    url?: InstanceType<typeof StringFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class FileSumAggregateInput {
    id?: true;
    filesize?: true;
}
export declare class FileSumAggregate {
    id?: number;
    filesize?: number;
}
export declare class FileSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
}
export declare class FileUncheckedCreateNestedManyWithoutCreatedByInput {
    create?: Array<FileCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<FileCreateOrConnectWithoutCreatedByInput>;
    createMany?: InstanceType<typeof FileCreateManyCreatedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
}
export declare class FileUncheckedCreateWithoutCreatedByInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize: number;
    name: string;
    description: string;
    url: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FileUncheckedCreateInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize: number;
    name: string;
    description: string;
    url: string;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FileUncheckedUpdateManyWithoutCreatedByNestedInput {
    create?: Array<FileCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<FileCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<FileUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: InstanceType<typeof FileCreateManyCreatedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
    disconnect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
    delete?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
    connect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
    update?: Array<FileUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<FileUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<FileScalarWhereInput>;
}
export declare class FileUncheckedUpdateManyWithoutCreatedByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class FileUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class FileUncheckedUpdateWithoutCreatedByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class FileUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class FileUpdateManyMutationInput {
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class FileUpdateManyWithWhereWithoutCreatedByInput {
    where: InstanceType<typeof FileScalarWhereInput>;
    data: InstanceType<typeof FileUpdateManyMutationInput>;
}
export declare class FileUpdateManyWithoutCreatedByNestedInput {
    create?: Array<FileCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<FileCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<FileUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: InstanceType<typeof FileCreateManyCreatedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
    disconnect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
    delete?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
    connect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
    update?: Array<FileUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<FileUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<FileScalarWhereInput>;
}
export declare class FileUpdateWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
    data: InstanceType<typeof FileUpdateWithoutCreatedByInput>;
}
export declare class FileUpdateWithoutCreatedByInput {
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class FileUpdateInput {
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutFilesCreatedNestedInput>;
}
export declare class FileUpsertWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
    update: InstanceType<typeof FileUpdateWithoutCreatedByInput>;
    create: InstanceType<typeof FileCreateWithoutCreatedByInput>;
}
export declare class FileWhereUniqueInput {
    id?: number;
    createdById?: string;
    AND?: Array<FileWhereInput>;
    OR?: Array<FileWhereInput>;
    NOT?: Array<FileWhereInput>;
    fileType?: InstanceType<typeof EnumFileTypeFilter>;
    filesize?: InstanceType<typeof FloatFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    url?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    createdBy?: InstanceType<typeof UserRelationFilter>;
}
export declare class FileWhereInput {
    AND?: Array<FileWhereInput>;
    OR?: Array<FileWhereInput>;
    NOT?: Array<FileWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    fileType?: InstanceType<typeof EnumFileTypeFilter>;
    filesize?: InstanceType<typeof FloatFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    url?: InstanceType<typeof StringFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    createdBy?: InstanceType<typeof UserRelationFilter>;
}
export declare class File {
    id: number;
    fileType: keyof typeof FileType;
    filesize: number;
    name: string;
    description: string;
    url: string;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy?: InstanceType<typeof User>;
}
export declare class FindFirstFileOrThrowArgs {
    where?: InstanceType<typeof FileWhereInput>;
    orderBy?: Array<FileOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof FileScalarFieldEnum>;
}
export declare class FindFirstFileArgs {
    where?: InstanceType<typeof FileWhereInput>;
    orderBy?: Array<FileOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof FileScalarFieldEnum>;
}
export declare class FindManyFileArgs {
    where?: InstanceType<typeof FileWhereInput>;
    orderBy?: Array<FileOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof FileScalarFieldEnum>;
}
export declare class FindUniqueFileOrThrowArgs {
    where: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
}
export declare class FindUniqueFileArgs {
    where: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
}
export declare class UpdateManyFileArgs {
    data: InstanceType<typeof FileUpdateManyMutationInput>;
    where?: InstanceType<typeof FileWhereInput>;
}
export declare class UpdateOneFileArgs {
    data: InstanceType<typeof FileUpdateInput>;
    where: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
}
export declare class UpsertOneFileArgs {
    where: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
    create: InstanceType<typeof FileCreateInput>;
    update: InstanceType<typeof FileUpdateInput>;
}
export declare class AggregateHotel {
    _count?: InstanceType<typeof HotelCountAggregate>;
    _avg?: InstanceType<typeof HotelAvgAggregate>;
    _sum?: InstanceType<typeof HotelSumAggregate>;
    _min?: InstanceType<typeof HotelMinAggregate>;
    _max?: InstanceType<typeof HotelMaxAggregate>;
}
export declare class CreateManyHotelArgs {
    data: Array<HotelCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneHotelArgs {
    data: InstanceType<typeof HotelCreateInput>;
}
export declare class DeleteManyHotelArgs {
    where?: InstanceType<typeof HotelWhereInput>;
}
export declare class DeleteOneHotelArgs {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class FindFirstHotelOrThrowArgs {
    where?: InstanceType<typeof HotelWhereInput>;
    orderBy?: Array<HotelOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof HotelScalarFieldEnum>;
}
export declare class FindFirstHotelArgs {
    where?: InstanceType<typeof HotelWhereInput>;
    orderBy?: Array<HotelOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof HotelScalarFieldEnum>;
}
export declare class FindManyHotelArgs {
    where?: InstanceType<typeof HotelWhereInput>;
    orderBy?: Array<HotelOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof HotelScalarFieldEnum>;
}
export declare class FindUniqueHotelOrThrowArgs {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class FindUniqueHotelArgs {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class HotelAggregateArgs {
    where?: InstanceType<typeof HotelWhereInput>;
    orderBy?: Array<HotelOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof HotelCountAggregateInput>;
    _avg?: InstanceType<typeof HotelAvgAggregateInput>;
    _sum?: InstanceType<typeof HotelSumAggregateInput>;
    _min?: InstanceType<typeof HotelMinAggregateInput>;
    _max?: InstanceType<typeof HotelMaxAggregateInput>;
}
export declare class HotelAvgAggregateInput {
    id?: true;
    addressId?: true;
    rating?: true;
    quota?: true;
}
export declare class HotelAvgAggregate {
    id?: number;
    addressId?: number;
    rating?: number;
    quota?: number;
}
export declare class HotelAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    rating?: keyof typeof SortOrder;
    quota?: keyof typeof SortOrder;
}
export declare class HotelCountAggregateInput {
    id?: true;
    name?: true;
    addressId?: true;
    description?: true;
    rating?: true;
    startDate?: true;
    quota?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class HotelCountAggregate {
    id: number;
    name: number;
    addressId: number;
    description: number;
    rating: number;
    startDate: number;
    quota: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class HotelCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    rating?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    quota?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class HotelCount {
    images?: number;
    checkIns?: number;
}
export declare class HotelCreateManyCreatedByInputEnvelope {
    data: Array<HotelCreateManyCreatedByInput>;
    skipDuplicates?: boolean;
}
export declare class HotelCreateManyCreatedByInput {
    id?: number;
    name: string;
    addressId: number;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class HotelCreateManyInput {
    id?: number;
    name: string;
    addressId: number;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class HotelCreateNestedManyWithoutCreatedByInput {
    create?: Array<HotelCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<HotelCreateOrConnectWithoutCreatedByInput>;
    createMany?: InstanceType<typeof HotelCreateManyCreatedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
}
export declare class HotelCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof HotelCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof HotelCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class HotelCreateNestedOneWithoutCheckInsInput {
    create?: InstanceType<typeof HotelCreateWithoutCheckInsInput>;
    connectOrCreate?: InstanceType<typeof HotelCreateOrConnectWithoutCheckInsInput>;
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class HotelCreateNestedOneWithoutImagesInput {
    create?: InstanceType<typeof HotelCreateWithoutImagesInput>;
    connectOrCreate?: InstanceType<typeof HotelCreateOrConnectWithoutImagesInput>;
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class HotelCreateOrConnectWithoutAddressInput {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    create: InstanceType<typeof HotelCreateWithoutAddressInput>;
}
export declare class HotelCreateOrConnectWithoutCheckInsInput {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    create: InstanceType<typeof HotelCreateWithoutCheckInsInput>;
}
export declare class HotelCreateOrConnectWithoutCreatedByInput {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    create: InstanceType<typeof HotelCreateWithoutCreatedByInput>;
}
export declare class HotelCreateOrConnectWithoutImagesInput {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    create: InstanceType<typeof HotelCreateWithoutImagesInput>;
}
export declare class HotelCreateWithoutAddressInput {
    name: string;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutHotelImageInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutHotelInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutHotelsCreatedInput>;
}
export declare class HotelCreateWithoutCheckInsInput {
    name: string;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutHotelInput>;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutHotelImageInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutHotelsCreatedInput>;
}
export declare class HotelCreateWithoutCreatedByInput {
    name: string;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutHotelInput>;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutHotelImageInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutHotelInput>;
}
export declare class HotelCreateWithoutImagesInput {
    name: string;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutHotelInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutHotelInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutHotelsCreatedInput>;
}
export declare class HotelCreateInput {
    name: string;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutHotelInput>;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutHotelImageInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutHotelInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutHotelsCreatedInput>;
}
export declare class HotelGroupByArgs {
    where?: InstanceType<typeof HotelWhereInput>;
    orderBy?: Array<HotelOrderByWithAggregationInput>;
    by: Array<keyof typeof HotelScalarFieldEnum>;
    having?: InstanceType<typeof HotelScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof HotelCountAggregateInput>;
    _avg?: InstanceType<typeof HotelAvgAggregateInput>;
    _sum?: InstanceType<typeof HotelSumAggregateInput>;
    _min?: InstanceType<typeof HotelMinAggregateInput>;
    _max?: InstanceType<typeof HotelMaxAggregateInput>;
}
export declare class HotelGroupBy {
    id: number;
    name: string;
    addressId: number;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdById: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof HotelCountAggregate>;
    _avg?: InstanceType<typeof HotelAvgAggregate>;
    _sum?: InstanceType<typeof HotelSumAggregate>;
    _min?: InstanceType<typeof HotelMinAggregate>;
    _max?: InstanceType<typeof HotelMaxAggregate>;
}
export declare class HotelListRelationFilter {
    every?: InstanceType<typeof HotelWhereInput>;
    some?: InstanceType<typeof HotelWhereInput>;
    none?: InstanceType<typeof HotelWhereInput>;
}
export declare class HotelMaxAggregateInput {
    id?: true;
    name?: true;
    addressId?: true;
    description?: true;
    rating?: true;
    startDate?: true;
    quota?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class HotelMaxAggregate {
    id?: number;
    name?: string;
    addressId?: number;
    description?: string;
    rating?: number;
    startDate?: Date | string;
    quota?: number;
    createdById?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class HotelMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    rating?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    quota?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class HotelMinAggregateInput {
    id?: true;
    name?: true;
    addressId?: true;
    description?: true;
    rating?: true;
    startDate?: true;
    quota?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class HotelMinAggregate {
    id?: number;
    name?: string;
    addressId?: number;
    description?: string;
    rating?: number;
    startDate?: Date | string;
    quota?: number;
    createdById?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class HotelMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    rating?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    quota?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class HotelNullableRelationFilter {
    is?: InstanceType<typeof HotelWhereInput>;
    isNot?: InstanceType<typeof HotelWhereInput>;
}
export declare class HotelOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class HotelOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    rating?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    quota?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof HotelCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof HotelAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof HotelMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof HotelMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof HotelSumOrderByAggregateInput>;
}
export declare class HotelOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    rating?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    quota?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    address?: InstanceType<typeof AddressOrderByWithRelationInput>;
    images?: InstanceType<typeof ImagesOrderByRelationAggregateInput>;
    checkIns?: InstanceType<typeof CheckInOrderByRelationAggregateInput>;
    createdBy?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class HotelRelationFilter {
    is?: InstanceType<typeof HotelWhereInput>;
    isNot?: InstanceType<typeof HotelWhereInput>;
}
export declare class HotelScalarWhereWithAggregatesInput {
    AND?: Array<HotelScalarWhereWithAggregatesInput>;
    OR?: Array<HotelScalarWhereWithAggregatesInput>;
    NOT?: Array<HotelScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    addressId?: InstanceType<typeof IntWithAggregatesFilter>;
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    rating?: InstanceType<typeof FloatWithAggregatesFilter>;
    startDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    quota?: InstanceType<typeof IntWithAggregatesFilter>;
    createdById?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class HotelScalarWhereInput {
    AND?: Array<HotelScalarWhereInput>;
    OR?: Array<HotelScalarWhereInput>;
    NOT?: Array<HotelScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    addressId?: InstanceType<typeof IntFilter>;
    description?: InstanceType<typeof StringFilter>;
    rating?: InstanceType<typeof FloatFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    quota?: InstanceType<typeof IntFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class HotelSumAggregateInput {
    id?: true;
    addressId?: true;
    rating?: true;
    quota?: true;
}
export declare class HotelSumAggregate {
    id?: number;
    addressId?: number;
    rating?: number;
    quota?: number;
}
export declare class HotelSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    rating?: keyof typeof SortOrder;
    quota?: keyof typeof SortOrder;
}
export declare class HotelUncheckedCreateNestedManyWithoutCreatedByInput {
    create?: Array<HotelCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<HotelCreateOrConnectWithoutCreatedByInput>;
    createMany?: InstanceType<typeof HotelCreateManyCreatedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
}
export declare class HotelUncheckedCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof HotelCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof HotelCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class HotelUncheckedCreateWithoutAddressInput {
    id?: number;
    name: string;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutHotelImageInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutHotelInput>;
}
export declare class HotelUncheckedCreateWithoutCheckInsInput {
    id?: number;
    name: string;
    addressId: number;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutHotelImageInput>;
}
export declare class HotelUncheckedCreateWithoutCreatedByInput {
    id?: number;
    name: string;
    addressId: number;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutHotelImageInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutHotelInput>;
}
export declare class HotelUncheckedCreateWithoutImagesInput {
    id?: number;
    name: string;
    addressId: number;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutHotelInput>;
}
export declare class HotelUncheckedCreateInput {
    id?: number;
    name: string;
    addressId: number;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutHotelImageInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutHotelInput>;
}
export declare class HotelUncheckedUpdateManyWithoutCreatedByNestedInput {
    create?: Array<HotelCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<HotelCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<HotelUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: InstanceType<typeof HotelCreateManyCreatedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
    disconnect?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
    delete?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
    connect?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
    update?: Array<HotelUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<HotelUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<HotelScalarWhereInput>;
}
export declare class HotelUncheckedUpdateManyWithoutCreatedByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class HotelUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class HotelUncheckedUpdateOneWithoutAddressNestedInput {
    create?: InstanceType<typeof HotelCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof HotelCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof HotelUpsertWithoutAddressInput>;
    disconnect?: InstanceType<typeof HotelWhereInput>;
    delete?: InstanceType<typeof HotelWhereInput>;
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    update?: InstanceType<typeof HotelUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class HotelUncheckedUpdateWithoutAddressInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutHotelImageNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutHotelNestedInput>;
}
export declare class HotelUncheckedUpdateWithoutCheckInsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutHotelImageNestedInput>;
}
export declare class HotelUncheckedUpdateWithoutCreatedByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutHotelImageNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutHotelNestedInput>;
}
export declare class HotelUncheckedUpdateWithoutImagesInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutHotelNestedInput>;
}
export declare class HotelUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutHotelImageNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutHotelNestedInput>;
}
export declare class HotelUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class HotelUpdateManyWithWhereWithoutCreatedByInput {
    where: InstanceType<typeof HotelScalarWhereInput>;
    data: InstanceType<typeof HotelUpdateManyMutationInput>;
}
export declare class HotelUpdateManyWithoutCreatedByNestedInput {
    create?: Array<HotelCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<HotelCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<HotelUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: InstanceType<typeof HotelCreateManyCreatedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
    disconnect?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
    delete?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
    connect?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
    update?: Array<HotelUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<HotelUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<HotelScalarWhereInput>;
}
export declare class HotelUpdateOneRequiredWithoutCheckInsNestedInput {
    create?: InstanceType<typeof HotelCreateWithoutCheckInsInput>;
    connectOrCreate?: InstanceType<typeof HotelCreateOrConnectWithoutCheckInsInput>;
    upsert?: InstanceType<typeof HotelUpsertWithoutCheckInsInput>;
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    update?: InstanceType<typeof HotelUpdateToOneWithWhereWithoutCheckInsInput>;
}
export declare class HotelUpdateOneWithoutAddressNestedInput {
    create?: InstanceType<typeof HotelCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof HotelCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof HotelUpsertWithoutAddressInput>;
    disconnect?: InstanceType<typeof HotelWhereInput>;
    delete?: InstanceType<typeof HotelWhereInput>;
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    update?: InstanceType<typeof HotelUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class HotelUpdateOneWithoutImagesNestedInput {
    create?: InstanceType<typeof HotelCreateWithoutImagesInput>;
    connectOrCreate?: InstanceType<typeof HotelCreateOrConnectWithoutImagesInput>;
    upsert?: InstanceType<typeof HotelUpsertWithoutImagesInput>;
    disconnect?: InstanceType<typeof HotelWhereInput>;
    delete?: InstanceType<typeof HotelWhereInput>;
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    update?: InstanceType<typeof HotelUpdateToOneWithWhereWithoutImagesInput>;
}
export declare class HotelUpdateToOneWithWhereWithoutAddressInput {
    where?: InstanceType<typeof HotelWhereInput>;
    data: InstanceType<typeof HotelUpdateWithoutAddressInput>;
}
export declare class HotelUpdateToOneWithWhereWithoutCheckInsInput {
    where?: InstanceType<typeof HotelWhereInput>;
    data: InstanceType<typeof HotelUpdateWithoutCheckInsInput>;
}
export declare class HotelUpdateToOneWithWhereWithoutImagesInput {
    where?: InstanceType<typeof HotelWhereInput>;
    data: InstanceType<typeof HotelUpdateWithoutImagesInput>;
}
export declare class HotelUpdateWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    data: InstanceType<typeof HotelUpdateWithoutCreatedByInput>;
}
export declare class HotelUpdateWithoutAddressInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutHotelImageNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutHotelNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutHotelsCreatedNestedInput>;
}
export declare class HotelUpdateWithoutCheckInsInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutHotelNestedInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutHotelImageNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutHotelsCreatedNestedInput>;
}
export declare class HotelUpdateWithoutCreatedByInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutHotelNestedInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutHotelImageNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutHotelNestedInput>;
}
export declare class HotelUpdateWithoutImagesInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutHotelNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutHotelNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutHotelsCreatedNestedInput>;
}
export declare class HotelUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutHotelNestedInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutHotelImageNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutHotelNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutHotelsCreatedNestedInput>;
}
export declare class HotelUpsertWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    update: InstanceType<typeof HotelUpdateWithoutCreatedByInput>;
    create: InstanceType<typeof HotelCreateWithoutCreatedByInput>;
}
export declare class HotelUpsertWithoutAddressInput {
    update: InstanceType<typeof HotelUpdateWithoutAddressInput>;
    create: InstanceType<typeof HotelCreateWithoutAddressInput>;
    where?: InstanceType<typeof HotelWhereInput>;
}
export declare class HotelUpsertWithoutCheckInsInput {
    update: InstanceType<typeof HotelUpdateWithoutCheckInsInput>;
    create: InstanceType<typeof HotelCreateWithoutCheckInsInput>;
    where?: InstanceType<typeof HotelWhereInput>;
}
export declare class HotelUpsertWithoutImagesInput {
    update: InstanceType<typeof HotelUpdateWithoutImagesInput>;
    create: InstanceType<typeof HotelCreateWithoutImagesInput>;
    where?: InstanceType<typeof HotelWhereInput>;
}
export declare class HotelWhereUniqueInput {
    id?: number;
    addressId?: number;
    AND?: Array<HotelWhereInput>;
    OR?: Array<HotelWhereInput>;
    NOT?: Array<HotelWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    rating?: InstanceType<typeof FloatFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    quota?: InstanceType<typeof IntFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
    images?: InstanceType<typeof ImagesListRelationFilter>;
    checkIns?: InstanceType<typeof CheckInListRelationFilter>;
    createdBy?: InstanceType<typeof UserRelationFilter>;
}
export declare class HotelWhereInput {
    AND?: Array<HotelWhereInput>;
    OR?: Array<HotelWhereInput>;
    NOT?: Array<HotelWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    addressId?: InstanceType<typeof IntFilter>;
    description?: InstanceType<typeof StringFilter>;
    rating?: InstanceType<typeof FloatFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    quota?: InstanceType<typeof IntFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
    images?: InstanceType<typeof ImagesListRelationFilter>;
    checkIns?: InstanceType<typeof CheckInListRelationFilter>;
    createdBy?: InstanceType<typeof UserRelationFilter>;
}
export declare class Hotel {
    id: number;
    name: string;
    addressId: number;
    description: string;
    rating: number;
    startDate: Date;
    quota: number;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    address?: InstanceType<typeof Address>;
    images?: Array<Images>;
    checkIns?: Array<CheckIn>;
    createdBy?: InstanceType<typeof User>;
    _count?: InstanceType<typeof HotelCount>;
}
export declare class UpdateManyHotelArgs {
    data: InstanceType<typeof HotelUpdateManyMutationInput>;
    where?: InstanceType<typeof HotelWhereInput>;
}
export declare class UpdateOneHotelArgs {
    data: InstanceType<typeof HotelUpdateInput>;
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class UpsertOneHotelArgs {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    create: InstanceType<typeof HotelCreateInput>;
    update: InstanceType<typeof HotelUpdateInput>;
}
export declare class AggregateImages {
    _count?: InstanceType<typeof ImagesCountAggregate>;
    _avg?: InstanceType<typeof ImagesAvgAggregate>;
    _sum?: InstanceType<typeof ImagesSumAggregate>;
    _min?: InstanceType<typeof ImagesMinAggregate>;
    _max?: InstanceType<typeof ImagesMaxAggregate>;
}
export declare class CreateManyImagesArgs {
    data: Array<ImagesCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneImagesArgs {
    data: InstanceType<typeof ImagesCreateInput>;
}
export declare class DeleteManyImagesArgs {
    where?: InstanceType<typeof ImagesWhereInput>;
}
export declare class DeleteOneImagesArgs {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
}
export declare class FindFirstImagesOrThrowArgs {
    where?: InstanceType<typeof ImagesWhereInput>;
    orderBy?: Array<ImagesOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ImagesScalarFieldEnum>;
}
export declare class FindFirstImagesArgs {
    where?: InstanceType<typeof ImagesWhereInput>;
    orderBy?: Array<ImagesOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ImagesScalarFieldEnum>;
}
export declare class FindManyImagesArgs {
    where?: InstanceType<typeof ImagesWhereInput>;
    orderBy?: Array<ImagesOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ImagesScalarFieldEnum>;
}
export declare class FindUniqueImagesOrThrowArgs {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
}
export declare class FindUniqueImagesArgs {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
}
export declare class ImagesAggregateArgs {
    where?: InstanceType<typeof ImagesWhereInput>;
    orderBy?: Array<ImagesOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ImagesCountAggregateInput>;
    _avg?: InstanceType<typeof ImagesAvgAggregateInput>;
    _sum?: InstanceType<typeof ImagesSumAggregateInput>;
    _min?: InstanceType<typeof ImagesMinAggregateInput>;
    _max?: InstanceType<typeof ImagesMaxAggregateInput>;
}
export declare class ImagesAvgAggregateInput {
    id?: true;
    filesize?: true;
    hotelImageId?: true;
    programImageId?: true;
    rewardImageId?: true;
    projectImageId?: true;
}
export declare class ImagesAvgAggregate {
    id?: number;
    filesize?: number;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
}
export declare class ImagesAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
    hotelImageId?: keyof typeof SortOrder;
    programImageId?: keyof typeof SortOrder;
    rewardImageId?: keyof typeof SortOrder;
    projectImageId?: keyof typeof SortOrder;
}
export declare class ImagesCountAggregateInput {
    id?: true;
    fileType?: true;
    filesize?: true;
    url?: true;
    hotelImageId?: true;
    programImageId?: true;
    rewardImageId?: true;
    projectImageId?: true;
    createdAt?: true;
    _all?: true;
}
export declare class ImagesCountAggregate {
    id: number;
    fileType: number;
    filesize: number;
    url: number;
    hotelImageId: number;
    programImageId: number;
    rewardImageId: number;
    projectImageId: number;
    createdAt: number;
    _all: number;
}
export declare class ImagesCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    hotelImageId?: keyof typeof SortOrder;
    programImageId?: keyof typeof SortOrder;
    rewardImageId?: keyof typeof SortOrder;
    projectImageId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class ImagesCreateManyHotelImageInputEnvelope {
    data: Array<ImagesCreateManyHotelImageInput>;
    skipDuplicates?: boolean;
}
export declare class ImagesCreateManyHotelImageInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize: number;
    url: string;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesCreateManyProgramImageInputEnvelope {
    data: Array<ImagesCreateManyProgramImageInput>;
    skipDuplicates?: boolean;
}
export declare class ImagesCreateManyProgramImageInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize: number;
    url: string;
    hotelImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesCreateManyProjectImageInputEnvelope {
    data: Array<ImagesCreateManyProjectImageInput>;
    skipDuplicates?: boolean;
}
export declare class ImagesCreateManyProjectImageInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize: number;
    url: string;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesCreateManyRewardImageInputEnvelope {
    data: Array<ImagesCreateManyRewardImageInput>;
    skipDuplicates?: boolean;
}
export declare class ImagesCreateManyRewardImageInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize: number;
    url: string;
    hotelImageId?: number;
    programImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesCreateManyInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize: number;
    url: string;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesCreateNestedManyWithoutHotelImageInput {
    create?: Array<ImagesCreateWithoutHotelImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutHotelImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyHotelImageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
export declare class ImagesCreateNestedManyWithoutProgramImageInput {
    create?: Array<ImagesCreateWithoutProgramImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProgramImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyProgramImageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
export declare class ImagesCreateNestedManyWithoutProjectImageInput {
    create?: Array<ImagesCreateWithoutProjectImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProjectImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyProjectImageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
export declare class ImagesCreateNestedManyWithoutRewardImageInput {
    create?: Array<ImagesCreateWithoutRewardImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutRewardImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyRewardImageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
export declare class ImagesCreateOrConnectWithoutHotelImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ImagesCreateWithoutHotelImageInput>;
}
export declare class ImagesCreateOrConnectWithoutProgramImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ImagesCreateWithoutProgramImageInput>;
}
export declare class ImagesCreateOrConnectWithoutProjectImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ImagesCreateWithoutProjectImageInput>;
}
export declare class ImagesCreateOrConnectWithoutRewardImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ImagesCreateWithoutRewardImageInput>;
}
export declare class ImagesCreateWithoutHotelImageInput {
    fileType: keyof typeof FileType;
    filesize: number;
    url: string;
    createdAt?: Date | string;
    programImage?: InstanceType<typeof ProgramCreateNestedOneWithoutImagesInput>;
    rewardImage?: InstanceType<typeof RewardCreateNestedOneWithoutImagesInput>;
    projectImage?: InstanceType<typeof ProjectCreateNestedOneWithoutImagesInput>;
}
export declare class ImagesCreateWithoutProgramImageInput {
    fileType: keyof typeof FileType;
    filesize: number;
    url: string;
    createdAt?: Date | string;
    hotelImage?: InstanceType<typeof HotelCreateNestedOneWithoutImagesInput>;
    rewardImage?: InstanceType<typeof RewardCreateNestedOneWithoutImagesInput>;
    projectImage?: InstanceType<typeof ProjectCreateNestedOneWithoutImagesInput>;
}
export declare class ImagesCreateWithoutProjectImageInput {
    fileType: keyof typeof FileType;
    filesize: number;
    url: string;
    createdAt?: Date | string;
    hotelImage?: InstanceType<typeof HotelCreateNestedOneWithoutImagesInput>;
    programImage?: InstanceType<typeof ProgramCreateNestedOneWithoutImagesInput>;
    rewardImage?: InstanceType<typeof RewardCreateNestedOneWithoutImagesInput>;
}
export declare class ImagesCreateWithoutRewardImageInput {
    fileType: keyof typeof FileType;
    filesize: number;
    url: string;
    createdAt?: Date | string;
    hotelImage?: InstanceType<typeof HotelCreateNestedOneWithoutImagesInput>;
    programImage?: InstanceType<typeof ProgramCreateNestedOneWithoutImagesInput>;
    projectImage?: InstanceType<typeof ProjectCreateNestedOneWithoutImagesInput>;
}
export declare class ImagesCreateInput {
    fileType: keyof typeof FileType;
    filesize: number;
    url: string;
    createdAt?: Date | string;
    hotelImage?: InstanceType<typeof HotelCreateNestedOneWithoutImagesInput>;
    programImage?: InstanceType<typeof ProgramCreateNestedOneWithoutImagesInput>;
    rewardImage?: InstanceType<typeof RewardCreateNestedOneWithoutImagesInput>;
    projectImage?: InstanceType<typeof ProjectCreateNestedOneWithoutImagesInput>;
}
export declare class ImagesGroupByArgs {
    where?: InstanceType<typeof ImagesWhereInput>;
    orderBy?: Array<ImagesOrderByWithAggregationInput>;
    by: Array<keyof typeof ImagesScalarFieldEnum>;
    having?: InstanceType<typeof ImagesScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ImagesCountAggregateInput>;
    _avg?: InstanceType<typeof ImagesAvgAggregateInput>;
    _sum?: InstanceType<typeof ImagesSumAggregateInput>;
    _min?: InstanceType<typeof ImagesMinAggregateInput>;
    _max?: InstanceType<typeof ImagesMaxAggregateInput>;
}
export declare class ImagesGroupBy {
    id: number;
    fileType: keyof typeof FileType;
    filesize: number;
    url: string;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt: Date | string;
    _count?: InstanceType<typeof ImagesCountAggregate>;
    _avg?: InstanceType<typeof ImagesAvgAggregate>;
    _sum?: InstanceType<typeof ImagesSumAggregate>;
    _min?: InstanceType<typeof ImagesMinAggregate>;
    _max?: InstanceType<typeof ImagesMaxAggregate>;
}
export declare class ImagesListRelationFilter {
    every?: InstanceType<typeof ImagesWhereInput>;
    some?: InstanceType<typeof ImagesWhereInput>;
    none?: InstanceType<typeof ImagesWhereInput>;
}
export declare class ImagesMaxAggregateInput {
    id?: true;
    fileType?: true;
    filesize?: true;
    url?: true;
    hotelImageId?: true;
    programImageId?: true;
    rewardImageId?: true;
    projectImageId?: true;
    createdAt?: true;
}
export declare class ImagesMaxAggregate {
    id?: number;
    fileType?: keyof typeof FileType;
    filesize?: number;
    url?: string;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    hotelImageId?: keyof typeof SortOrder;
    programImageId?: keyof typeof SortOrder;
    rewardImageId?: keyof typeof SortOrder;
    projectImageId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class ImagesMinAggregateInput {
    id?: true;
    fileType?: true;
    filesize?: true;
    url?: true;
    hotelImageId?: true;
    programImageId?: true;
    rewardImageId?: true;
    projectImageId?: true;
    createdAt?: true;
}
export declare class ImagesMinAggregate {
    id?: number;
    fileType?: keyof typeof FileType;
    filesize?: number;
    url?: string;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    hotelImageId?: keyof typeof SortOrder;
    programImageId?: keyof typeof SortOrder;
    rewardImageId?: keyof typeof SortOrder;
    projectImageId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class ImagesOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ImagesOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    hotelImageId?: InstanceType<typeof SortOrderInput>;
    programImageId?: InstanceType<typeof SortOrderInput>;
    rewardImageId?: InstanceType<typeof SortOrderInput>;
    projectImageId?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ImagesCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ImagesAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ImagesMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ImagesMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ImagesSumOrderByAggregateInput>;
}
export declare class ImagesOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    hotelImageId?: InstanceType<typeof SortOrderInput>;
    programImageId?: InstanceType<typeof SortOrderInput>;
    rewardImageId?: InstanceType<typeof SortOrderInput>;
    projectImageId?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    hotelImage?: InstanceType<typeof HotelOrderByWithRelationInput>;
    programImage?: InstanceType<typeof ProgramOrderByWithRelationInput>;
    rewardImage?: InstanceType<typeof RewardOrderByWithRelationInput>;
    projectImage?: InstanceType<typeof ProjectOrderByWithRelationInput>;
}
export declare class ImagesScalarWhereWithAggregatesInput {
    AND?: Array<ImagesScalarWhereWithAggregatesInput>;
    OR?: Array<ImagesScalarWhereWithAggregatesInput>;
    NOT?: Array<ImagesScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    fileType?: InstanceType<typeof EnumFileTypeWithAggregatesFilter>;
    filesize?: InstanceType<typeof FloatWithAggregatesFilter>;
    url?: InstanceType<typeof StringWithAggregatesFilter>;
    hotelImageId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    programImageId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    rewardImageId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    projectImageId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class ImagesScalarWhereInput {
    AND?: Array<ImagesScalarWhereInput>;
    OR?: Array<ImagesScalarWhereInput>;
    NOT?: Array<ImagesScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    fileType?: InstanceType<typeof EnumFileTypeFilter>;
    filesize?: InstanceType<typeof FloatFilter>;
    url?: InstanceType<typeof StringFilter>;
    hotelImageId?: InstanceType<typeof IntNullableFilter>;
    programImageId?: InstanceType<typeof IntNullableFilter>;
    rewardImageId?: InstanceType<typeof IntNullableFilter>;
    projectImageId?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class ImagesSumAggregateInput {
    id?: true;
    filesize?: true;
    hotelImageId?: true;
    programImageId?: true;
    rewardImageId?: true;
    projectImageId?: true;
}
export declare class ImagesSumAggregate {
    id?: number;
    filesize?: number;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
}
export declare class ImagesSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
    hotelImageId?: keyof typeof SortOrder;
    programImageId?: keyof typeof SortOrder;
    rewardImageId?: keyof typeof SortOrder;
    projectImageId?: keyof typeof SortOrder;
}
export declare class ImagesUncheckedCreateNestedManyWithoutHotelImageInput {
    create?: Array<ImagesCreateWithoutHotelImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutHotelImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyHotelImageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
export declare class ImagesUncheckedCreateNestedManyWithoutProgramImageInput {
    create?: Array<ImagesCreateWithoutProgramImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProgramImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyProgramImageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
export declare class ImagesUncheckedCreateNestedManyWithoutProjectImageInput {
    create?: Array<ImagesCreateWithoutProjectImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProjectImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyProjectImageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
export declare class ImagesUncheckedCreateNestedManyWithoutRewardImageInput {
    create?: Array<ImagesCreateWithoutRewardImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutRewardImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyRewardImageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
export declare class ImagesUncheckedCreateWithoutHotelImageInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize: number;
    url: string;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesUncheckedCreateWithoutProgramImageInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize: number;
    url: string;
    hotelImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesUncheckedCreateWithoutProjectImageInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize: number;
    url: string;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesUncheckedCreateWithoutRewardImageInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize: number;
    url: string;
    hotelImageId?: number;
    programImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesUncheckedCreateInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize: number;
    url: string;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesUncheckedUpdateManyWithoutHotelImageNestedInput {
    create?: Array<ImagesCreateWithoutHotelImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutHotelImageInput>;
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutHotelImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyHotelImageInputEnvelope>;
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    update?: Array<ImagesUpdateWithWhereUniqueWithoutHotelImageInput>;
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutHotelImageInput>;
    deleteMany?: Array<ImagesScalarWhereInput>;
}
export declare class ImagesUncheckedUpdateManyWithoutHotelImageInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    programImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rewardImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateManyWithoutProgramImageNestedInput {
    create?: Array<ImagesCreateWithoutProgramImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProgramImageInput>;
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutProgramImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyProgramImageInputEnvelope>;
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    update?: Array<ImagesUpdateWithWhereUniqueWithoutProgramImageInput>;
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutProgramImageInput>;
    deleteMany?: Array<ImagesScalarWhereInput>;
}
export declare class ImagesUncheckedUpdateManyWithoutProgramImageInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rewardImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateManyWithoutProjectImageNestedInput {
    create?: Array<ImagesCreateWithoutProjectImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProjectImageInput>;
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutProjectImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyProjectImageInputEnvelope>;
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    update?: Array<ImagesUpdateWithWhereUniqueWithoutProjectImageInput>;
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutProjectImageInput>;
    deleteMany?: Array<ImagesScalarWhereInput>;
}
export declare class ImagesUncheckedUpdateManyWithoutProjectImageInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rewardImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateManyWithoutRewardImageNestedInput {
    create?: Array<ImagesCreateWithoutRewardImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutRewardImageInput>;
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutRewardImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyRewardImageInputEnvelope>;
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    update?: Array<ImagesUpdateWithWhereUniqueWithoutRewardImageInput>;
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutRewardImageInput>;
    deleteMany?: Array<ImagesScalarWhereInput>;
}
export declare class ImagesUncheckedUpdateManyWithoutRewardImageInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rewardImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateWithoutHotelImageInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    programImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rewardImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateWithoutProgramImageInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rewardImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateWithoutProjectImageInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rewardImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateWithoutRewardImageInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rewardImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUpdateManyMutationInput {
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUpdateManyWithWhereWithoutHotelImageInput {
    where: InstanceType<typeof ImagesScalarWhereInput>;
    data: InstanceType<typeof ImagesUpdateManyMutationInput>;
}
export declare class ImagesUpdateManyWithWhereWithoutProgramImageInput {
    where: InstanceType<typeof ImagesScalarWhereInput>;
    data: InstanceType<typeof ImagesUpdateManyMutationInput>;
}
export declare class ImagesUpdateManyWithWhereWithoutProjectImageInput {
    where: InstanceType<typeof ImagesScalarWhereInput>;
    data: InstanceType<typeof ImagesUpdateManyMutationInput>;
}
export declare class ImagesUpdateManyWithWhereWithoutRewardImageInput {
    where: InstanceType<typeof ImagesScalarWhereInput>;
    data: InstanceType<typeof ImagesUpdateManyMutationInput>;
}
export declare class ImagesUpdateManyWithoutHotelImageNestedInput {
    create?: Array<ImagesCreateWithoutHotelImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutHotelImageInput>;
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutHotelImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyHotelImageInputEnvelope>;
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    update?: Array<ImagesUpdateWithWhereUniqueWithoutHotelImageInput>;
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutHotelImageInput>;
    deleteMany?: Array<ImagesScalarWhereInput>;
}
export declare class ImagesUpdateManyWithoutProgramImageNestedInput {
    create?: Array<ImagesCreateWithoutProgramImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProgramImageInput>;
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutProgramImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyProgramImageInputEnvelope>;
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    update?: Array<ImagesUpdateWithWhereUniqueWithoutProgramImageInput>;
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutProgramImageInput>;
    deleteMany?: Array<ImagesScalarWhereInput>;
}
export declare class ImagesUpdateManyWithoutProjectImageNestedInput {
    create?: Array<ImagesCreateWithoutProjectImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProjectImageInput>;
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutProjectImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyProjectImageInputEnvelope>;
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    update?: Array<ImagesUpdateWithWhereUniqueWithoutProjectImageInput>;
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutProjectImageInput>;
    deleteMany?: Array<ImagesScalarWhereInput>;
}
export declare class ImagesUpdateManyWithoutRewardImageNestedInput {
    create?: Array<ImagesCreateWithoutRewardImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutRewardImageInput>;
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutRewardImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyRewardImageInputEnvelope>;
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    update?: Array<ImagesUpdateWithWhereUniqueWithoutRewardImageInput>;
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutRewardImageInput>;
    deleteMany?: Array<ImagesScalarWhereInput>;
}
export declare class ImagesUpdateWithWhereUniqueWithoutHotelImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ImagesUpdateWithoutHotelImageInput>;
}
export declare class ImagesUpdateWithWhereUniqueWithoutProgramImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ImagesUpdateWithoutProgramImageInput>;
}
export declare class ImagesUpdateWithWhereUniqueWithoutProjectImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ImagesUpdateWithoutProjectImageInput>;
}
export declare class ImagesUpdateWithWhereUniqueWithoutRewardImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ImagesUpdateWithoutRewardImageInput>;
}
export declare class ImagesUpdateWithoutHotelImageInput {
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    programImage?: InstanceType<typeof ProgramUpdateOneWithoutImagesNestedInput>;
    rewardImage?: InstanceType<typeof RewardUpdateOneWithoutImagesNestedInput>;
    projectImage?: InstanceType<typeof ProjectUpdateOneWithoutImagesNestedInput>;
}
export declare class ImagesUpdateWithoutProgramImageInput {
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    hotelImage?: InstanceType<typeof HotelUpdateOneWithoutImagesNestedInput>;
    rewardImage?: InstanceType<typeof RewardUpdateOneWithoutImagesNestedInput>;
    projectImage?: InstanceType<typeof ProjectUpdateOneWithoutImagesNestedInput>;
}
export declare class ImagesUpdateWithoutProjectImageInput {
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    hotelImage?: InstanceType<typeof HotelUpdateOneWithoutImagesNestedInput>;
    programImage?: InstanceType<typeof ProgramUpdateOneWithoutImagesNestedInput>;
    rewardImage?: InstanceType<typeof RewardUpdateOneWithoutImagesNestedInput>;
}
export declare class ImagesUpdateWithoutRewardImageInput {
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    hotelImage?: InstanceType<typeof HotelUpdateOneWithoutImagesNestedInput>;
    programImage?: InstanceType<typeof ProgramUpdateOneWithoutImagesNestedInput>;
    projectImage?: InstanceType<typeof ProjectUpdateOneWithoutImagesNestedInput>;
}
export declare class ImagesUpdateInput {
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    hotelImage?: InstanceType<typeof HotelUpdateOneWithoutImagesNestedInput>;
    programImage?: InstanceType<typeof ProgramUpdateOneWithoutImagesNestedInput>;
    rewardImage?: InstanceType<typeof RewardUpdateOneWithoutImagesNestedInput>;
    projectImage?: InstanceType<typeof ProjectUpdateOneWithoutImagesNestedInput>;
}
export declare class ImagesUpsertWithWhereUniqueWithoutHotelImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ImagesUpdateWithoutHotelImageInput>;
    create: InstanceType<typeof ImagesCreateWithoutHotelImageInput>;
}
export declare class ImagesUpsertWithWhereUniqueWithoutProgramImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ImagesUpdateWithoutProgramImageInput>;
    create: InstanceType<typeof ImagesCreateWithoutProgramImageInput>;
}
export declare class ImagesUpsertWithWhereUniqueWithoutProjectImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ImagesUpdateWithoutProjectImageInput>;
    create: InstanceType<typeof ImagesCreateWithoutProjectImageInput>;
}
export declare class ImagesUpsertWithWhereUniqueWithoutRewardImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ImagesUpdateWithoutRewardImageInput>;
    create: InstanceType<typeof ImagesCreateWithoutRewardImageInput>;
}
export declare class ImagesWhereUniqueInput {
    id?: number;
    AND?: Array<ImagesWhereInput>;
    OR?: Array<ImagesWhereInput>;
    NOT?: Array<ImagesWhereInput>;
    fileType?: InstanceType<typeof EnumFileTypeFilter>;
    filesize?: InstanceType<typeof FloatFilter>;
    url?: InstanceType<typeof StringFilter>;
    hotelImageId?: InstanceType<typeof IntNullableFilter>;
    programImageId?: InstanceType<typeof IntNullableFilter>;
    rewardImageId?: InstanceType<typeof IntNullableFilter>;
    projectImageId?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    hotelImage?: InstanceType<typeof HotelNullableRelationFilter>;
    programImage?: InstanceType<typeof ProgramNullableRelationFilter>;
    rewardImage?: InstanceType<typeof RewardNullableRelationFilter>;
    projectImage?: InstanceType<typeof ProjectNullableRelationFilter>;
}
export declare class ImagesWhereInput {
    AND?: Array<ImagesWhereInput>;
    OR?: Array<ImagesWhereInput>;
    NOT?: Array<ImagesWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    fileType?: InstanceType<typeof EnumFileTypeFilter>;
    filesize?: InstanceType<typeof FloatFilter>;
    url?: InstanceType<typeof StringFilter>;
    hotelImageId?: InstanceType<typeof IntNullableFilter>;
    programImageId?: InstanceType<typeof IntNullableFilter>;
    rewardImageId?: InstanceType<typeof IntNullableFilter>;
    projectImageId?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    hotelImage?: InstanceType<typeof HotelNullableRelationFilter>;
    programImage?: InstanceType<typeof ProgramNullableRelationFilter>;
    rewardImage?: InstanceType<typeof RewardNullableRelationFilter>;
    projectImage?: InstanceType<typeof ProjectNullableRelationFilter>;
}
export declare class Images {
    id: number;
    fileType: keyof typeof FileType;
    filesize: number;
    url: string;
    hotelImageId: number | null;
    programImageId: number | null;
    rewardImageId: number | null;
    projectImageId: number | null;
    createdAt: Date;
    hotelImage?: InstanceType<typeof Hotel> | null;
    programImage?: InstanceType<typeof Program> | null;
    rewardImage?: InstanceType<typeof Reward> | null;
    projectImage?: InstanceType<typeof Project> | null;
}
export declare class UpdateManyImagesArgs {
    data: InstanceType<typeof ImagesUpdateManyMutationInput>;
    where?: InstanceType<typeof ImagesWhereInput>;
}
export declare class UpdateOneImagesArgs {
    data: InstanceType<typeof ImagesUpdateInput>;
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
}
export declare class UpsertOneImagesArgs {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ImagesCreateInput>;
    update: InstanceType<typeof ImagesUpdateInput>;
}
export declare class AggregateItem {
    _count?: InstanceType<typeof ItemCountAggregate>;
    _avg?: InstanceType<typeof ItemAvgAggregate>;
    _sum?: InstanceType<typeof ItemSumAggregate>;
    _min?: InstanceType<typeof ItemMinAggregate>;
    _max?: InstanceType<typeof ItemMaxAggregate>;
}
export declare class CreateManyItemArgs {
    data: Array<ItemCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneItemArgs {
    data: InstanceType<typeof ItemCreateInput>;
}
export declare class DeleteManyItemArgs {
    where?: InstanceType<typeof ItemWhereInput>;
}
export declare class DeleteOneItemArgs {
    where: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
}
export declare class FindFirstItemOrThrowArgs {
    where?: InstanceType<typeof ItemWhereInput>;
    orderBy?: Array<ItemOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ItemScalarFieldEnum>;
}
export declare class FindFirstItemArgs {
    where?: InstanceType<typeof ItemWhereInput>;
    orderBy?: Array<ItemOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ItemScalarFieldEnum>;
}
export declare class FindManyItemArgs {
    where?: InstanceType<typeof ItemWhereInput>;
    orderBy?: Array<ItemOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ItemScalarFieldEnum>;
}
export declare class FindUniqueItemOrThrowArgs {
    where: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
}
export declare class FindUniqueItemArgs {
    where: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
}
export declare class ItemAggregateArgs {
    where?: InstanceType<typeof ItemWhereInput>;
    orderBy?: Array<ItemOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ItemCountAggregateInput>;
    _avg?: InstanceType<typeof ItemAvgAggregateInput>;
    _sum?: InstanceType<typeof ItemSumAggregateInput>;
    _min?: InstanceType<typeof ItemMinAggregateInput>;
    _max?: InstanceType<typeof ItemMaxAggregateInput>;
}
export declare class ItemAvgAggregateInput {
    id?: true;
    price?: true;
    qty?: true;
    orderId?: true;
}
export declare class ItemAvgAggregate {
    id?: number;
    price?: number;
    qty?: number;
    orderId?: number;
}
export declare class ItemAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    qty?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
}
export declare class ItemCountAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    qty?: true;
    userRole?: true;
    orderId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class ItemCountAggregate {
    id: number;
    name: number;
    description: number;
    price: number;
    qty: number;
    userRole: number;
    orderId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class ItemCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    qty?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ItemCreateManyOrderInputEnvelope {
    data: Array<ItemCreateManyOrderInput>;
    skipDuplicates?: boolean;
}
export declare class ItemCreateManyOrderInput {
    id?: number;
    name: string;
    description: string;
    price: number;
    qty: number;
    userRole: keyof typeof UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ItemCreateManyInput {
    id?: number;
    name: string;
    description: string;
    price: number;
    qty: number;
    userRole: keyof typeof UserRole;
    orderId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ItemCreateNestedManyWithoutOrderInput {
    create?: Array<ItemCreateWithoutOrderInput>;
    connectOrCreate?: Array<ItemCreateOrConnectWithoutOrderInput>;
    createMany?: InstanceType<typeof ItemCreateManyOrderInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;
}
export declare class ItemCreateOrConnectWithoutOrderInput {
    where: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ItemCreateWithoutOrderInput>;
}
export declare class ItemCreateWithoutOrderInput {
    name: string;
    description: string;
    price: number;
    qty: number;
    userRole: keyof typeof UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ItemCreateInput {
    name: string;
    description: string;
    price: number;
    qty: number;
    userRole: keyof typeof UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: InstanceType<typeof OrderCreateNestedOneWithoutItemsInput>;
}
export declare class ItemGroupByArgs {
    where?: InstanceType<typeof ItemWhereInput>;
    orderBy?: Array<ItemOrderByWithAggregationInput>;
    by: Array<keyof typeof ItemScalarFieldEnum>;
    having?: InstanceType<typeof ItemScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ItemCountAggregateInput>;
    _avg?: InstanceType<typeof ItemAvgAggregateInput>;
    _sum?: InstanceType<typeof ItemSumAggregateInput>;
    _min?: InstanceType<typeof ItemMinAggregateInput>;
    _max?: InstanceType<typeof ItemMaxAggregateInput>;
}
export declare class ItemGroupBy {
    id: number;
    name: string;
    description: string;
    price: number;
    qty: number;
    userRole: keyof typeof UserRole;
    orderId: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof ItemCountAggregate>;
    _avg?: InstanceType<typeof ItemAvgAggregate>;
    _sum?: InstanceType<typeof ItemSumAggregate>;
    _min?: InstanceType<typeof ItemMinAggregate>;
    _max?: InstanceType<typeof ItemMaxAggregate>;
}
export declare class ItemListRelationFilter {
    every?: InstanceType<typeof ItemWhereInput>;
    some?: InstanceType<typeof ItemWhereInput>;
    none?: InstanceType<typeof ItemWhereInput>;
}
export declare class ItemMaxAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    qty?: true;
    userRole?: true;
    orderId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ItemMaxAggregate {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    qty?: number;
    userRole?: keyof typeof UserRole;
    orderId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ItemMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    qty?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ItemMinAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    qty?: true;
    userRole?: true;
    orderId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ItemMinAggregate {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    qty?: number;
    userRole?: keyof typeof UserRole;
    orderId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ItemMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    qty?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ItemOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ItemOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    qty?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ItemCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ItemAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ItemMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ItemMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ItemSumOrderByAggregateInput>;
}
export declare class ItemOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    qty?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    order?: InstanceType<typeof OrderOrderByWithRelationInput>;
}
export declare class ItemScalarWhereWithAggregatesInput {
    AND?: Array<ItemScalarWhereWithAggregatesInput>;
    OR?: Array<ItemScalarWhereWithAggregatesInput>;
    NOT?: Array<ItemScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    price?: InstanceType<typeof FloatWithAggregatesFilter>;
    qty?: InstanceType<typeof IntWithAggregatesFilter>;
    userRole?: InstanceType<typeof EnumUserRoleWithAggregatesFilter>;
    orderId?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class ItemScalarWhereInput {
    AND?: Array<ItemScalarWhereInput>;
    OR?: Array<ItemScalarWhereInput>;
    NOT?: Array<ItemScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    price?: InstanceType<typeof FloatFilter>;
    qty?: InstanceType<typeof IntFilter>;
    userRole?: InstanceType<typeof EnumUserRoleFilter>;
    orderId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class ItemSumAggregateInput {
    id?: true;
    price?: true;
    qty?: true;
    orderId?: true;
}
export declare class ItemSumAggregate {
    id?: number;
    price?: number;
    qty?: number;
    orderId?: number;
}
export declare class ItemSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    qty?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
}
export declare class ItemUncheckedCreateNestedManyWithoutOrderInput {
    create?: Array<ItemCreateWithoutOrderInput>;
    connectOrCreate?: Array<ItemCreateOrConnectWithoutOrderInput>;
    createMany?: InstanceType<typeof ItemCreateManyOrderInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;
}
export declare class ItemUncheckedCreateWithoutOrderInput {
    id?: number;
    name: string;
    description: string;
    price: number;
    qty: number;
    userRole: keyof typeof UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ItemUncheckedCreateInput {
    id?: number;
    name: string;
    description: string;
    price: number;
    qty: number;
    userRole: keyof typeof UserRole;
    orderId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ItemUncheckedUpdateManyWithoutOrderNestedInput {
    create?: Array<ItemCreateWithoutOrderInput>;
    connectOrCreate?: Array<ItemCreateOrConnectWithoutOrderInput>;
    upsert?: Array<ItemUpsertWithWhereUniqueWithoutOrderInput>;
    createMany?: InstanceType<typeof ItemCreateManyOrderInputEnvelope>;
    set?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;
    update?: Array<ItemUpdateWithWhereUniqueWithoutOrderInput>;
    updateMany?: Array<ItemUpdateManyWithWhereWithoutOrderInput>;
    deleteMany?: Array<ItemScalarWhereInput>;
}
export declare class ItemUncheckedUpdateManyWithoutOrderInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    qty?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ItemUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    qty?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ItemUncheckedUpdateWithoutOrderInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    qty?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ItemUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    qty?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ItemUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    qty?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ItemUpdateManyWithWhereWithoutOrderInput {
    where: InstanceType<typeof ItemScalarWhereInput>;
    data: InstanceType<typeof ItemUpdateManyMutationInput>;
}
export declare class ItemUpdateManyWithoutOrderNestedInput {
    create?: Array<ItemCreateWithoutOrderInput>;
    connectOrCreate?: Array<ItemCreateOrConnectWithoutOrderInput>;
    upsert?: Array<ItemUpsertWithWhereUniqueWithoutOrderInput>;
    createMany?: InstanceType<typeof ItemCreateManyOrderInputEnvelope>;
    set?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;
    update?: Array<ItemUpdateWithWhereUniqueWithoutOrderInput>;
    updateMany?: Array<ItemUpdateManyWithWhereWithoutOrderInput>;
    deleteMany?: Array<ItemScalarWhereInput>;
}
export declare class ItemUpdateWithWhereUniqueWithoutOrderInput {
    where: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ItemUpdateWithoutOrderInput>;
}
export declare class ItemUpdateWithoutOrderInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    qty?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ItemUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    qty?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    order?: InstanceType<typeof OrderUpdateOneRequiredWithoutItemsNestedInput>;
}
export declare class ItemUpsertWithWhereUniqueWithoutOrderInput {
    where: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ItemUpdateWithoutOrderInput>;
    create: InstanceType<typeof ItemCreateWithoutOrderInput>;
}
export declare class ItemWhereUniqueInput {
    id?: number;
    AND?: Array<ItemWhereInput>;
    OR?: Array<ItemWhereInput>;
    NOT?: Array<ItemWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    price?: InstanceType<typeof FloatFilter>;
    qty?: InstanceType<typeof IntFilter>;
    userRole?: InstanceType<typeof EnumUserRoleFilter>;
    orderId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    order?: InstanceType<typeof OrderRelationFilter>;
}
export declare class ItemWhereInput {
    AND?: Array<ItemWhereInput>;
    OR?: Array<ItemWhereInput>;
    NOT?: Array<ItemWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    price?: InstanceType<typeof FloatFilter>;
    qty?: InstanceType<typeof IntFilter>;
    userRole?: InstanceType<typeof EnumUserRoleFilter>;
    orderId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    order?: InstanceType<typeof OrderRelationFilter>;
}
export declare class Item {
    id: number;
    name: string;
    description: string;
    price: number;
    qty: number;
    userRole: keyof typeof UserRole;
    orderId: number;
    createdAt: Date;
    updatedAt: Date;
    order?: InstanceType<typeof Order>;
}
export declare class UpdateManyItemArgs {
    data: InstanceType<typeof ItemUpdateManyMutationInput>;
    where?: InstanceType<typeof ItemWhereInput>;
}
export declare class UpdateOneItemArgs {
    data: InstanceType<typeof ItemUpdateInput>;
    where: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
}
export declare class UpsertOneItemArgs {
    where: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ItemCreateInput>;
    update: InstanceType<typeof ItemUpdateInput>;
}
export declare class AggregateOrder {
    _count?: InstanceType<typeof OrderCountAggregate>;
    _avg?: InstanceType<typeof OrderAvgAggregate>;
    _sum?: InstanceType<typeof OrderSumAggregate>;
    _min?: InstanceType<typeof OrderMinAggregate>;
    _max?: InstanceType<typeof OrderMaxAggregate>;
}
export declare class CreateManyOrderArgs {
    data: Array<OrderCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneOrderArgs {
    data: InstanceType<typeof OrderCreateInput>;
}
export declare class DeleteManyOrderArgs {
    where?: InstanceType<typeof OrderWhereInput>;
}
export declare class DeleteOneOrderArgs {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
}
export declare class FindFirstOrderOrThrowArgs {
    where?: InstanceType<typeof OrderWhereInput>;
    orderBy?: Array<OrderOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}
export declare class FindFirstOrderArgs {
    where?: InstanceType<typeof OrderWhereInput>;
    orderBy?: Array<OrderOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}
export declare class FindManyOrderArgs {
    where?: InstanceType<typeof OrderWhereInput>;
    orderBy?: Array<OrderOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}
export declare class FindUniqueOrderOrThrowArgs {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
}
export declare class FindUniqueOrderArgs {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
}
export declare class OrderAggregateArgs {
    where?: InstanceType<typeof OrderWhereInput>;
    orderBy?: Array<OrderOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof OrderCountAggregateInput>;
    _avg?: InstanceType<typeof OrderAvgAggregateInput>;
    _sum?: InstanceType<typeof OrderSumAggregateInput>;
    _min?: InstanceType<typeof OrderMinAggregateInput>;
    _max?: InstanceType<typeof OrderMaxAggregateInput>;
}
export declare class OrderAvgAggregateInput {
    id?: true;
    shippingId?: true;
    cost?: true;
    platformFee?: true;
    total?: true;
}
export declare class OrderAvgAggregate {
    id?: number;
    shippingId?: number;
    cost?: number;
    platformFee?: number;
    total?: number;
}
export declare class OrderAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    shippingId?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
    platformFee?: keyof typeof SortOrder;
    total?: keyof typeof SortOrder;
}
export declare class OrderCountAggregateInput {
    id?: true;
    status?: true;
    orderById?: true;
    shippingId?: true;
    isFullPaid?: true;
    cost?: true;
    platformFee?: true;
    total?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class OrderCountAggregate {
    id: number;
    status: number;
    orderById: number;
    shippingId: number;
    isFullPaid: number;
    cost: number;
    platformFee: number;
    total: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class OrderCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    orderById?: keyof typeof SortOrder;
    shippingId?: keyof typeof SortOrder;
    isFullPaid?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
    platformFee?: keyof typeof SortOrder;
    total?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class OrderCount {
    items?: number;
    payments?: number;
}
export declare class OrderCreateManyOrderByInputEnvelope {
    data: Array<OrderCreateManyOrderByInput>;
    skipDuplicates?: boolean;
}
export declare class OrderCreateManyOrderByInput {
    id?: number;
    status: keyof typeof TransactionStatus;
    shippingId?: number;
    isFullPaid: boolean;
    cost: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class OrderCreateManyInput {
    id?: number;
    status: keyof typeof TransactionStatus;
    orderById: string;
    shippingId?: number;
    isFullPaid: boolean;
    cost: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class OrderCreateNestedManyWithoutOrderByInput {
    create?: Array<OrderCreateWithoutOrderByInput>;
    connectOrCreate?: Array<OrderCreateOrConnectWithoutOrderByInput>;
    createMany?: InstanceType<typeof OrderCreateManyOrderByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>>;
}
export declare class OrderCreateNestedOneWithoutItemsInput {
    create?: InstanceType<typeof OrderCreateWithoutItemsInput>;
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutItemsInput>;
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
}
export declare class OrderCreateNestedOneWithoutPaymentsInput {
    create?: InstanceType<typeof OrderCreateWithoutPaymentsInput>;
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutPaymentsInput>;
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
}
export declare class OrderCreateNestedOneWithoutShippingInput {
    create?: InstanceType<typeof OrderCreateWithoutShippingInput>;
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutShippingInput>;
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
}
export declare class OrderCreateOrConnectWithoutItemsInput {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
    create: InstanceType<typeof OrderCreateWithoutItemsInput>;
}
export declare class OrderCreateOrConnectWithoutOrderByInput {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
    create: InstanceType<typeof OrderCreateWithoutOrderByInput>;
}
export declare class OrderCreateOrConnectWithoutPaymentsInput {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
    create: InstanceType<typeof OrderCreateWithoutPaymentsInput>;
}
export declare class OrderCreateOrConnectWithoutShippingInput {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
    create: InstanceType<typeof OrderCreateWithoutShippingInput>;
}
export declare class OrderCreateWithoutItemsInput {
    status: keyof typeof TransactionStatus;
    shippingId?: number;
    isFullPaid: boolean;
    cost: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderBy: InstanceType<typeof UserCreateNestedOneWithoutOrdersInput>;
    shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutOrderInput>;
    payments?: InstanceType<typeof PaymentCreateNestedManyWithoutOrderInput>;
}
export declare class OrderCreateWithoutOrderByInput {
    status: keyof typeof TransactionStatus;
    shippingId?: number;
    isFullPaid: boolean;
    cost: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: InstanceType<typeof ItemCreateNestedManyWithoutOrderInput>;
    shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutOrderInput>;
    payments?: InstanceType<typeof PaymentCreateNestedManyWithoutOrderInput>;
}
export declare class OrderCreateWithoutPaymentsInput {
    status: keyof typeof TransactionStatus;
    shippingId?: number;
    isFullPaid: boolean;
    cost: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderBy: InstanceType<typeof UserCreateNestedOneWithoutOrdersInput>;
    items?: InstanceType<typeof ItemCreateNestedManyWithoutOrderInput>;
    shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutOrderInput>;
}
export declare class OrderCreateWithoutShippingInput {
    status: keyof typeof TransactionStatus;
    shippingId?: number;
    isFullPaid: boolean;
    cost: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderBy: InstanceType<typeof UserCreateNestedOneWithoutOrdersInput>;
    items?: InstanceType<typeof ItemCreateNestedManyWithoutOrderInput>;
    payments?: InstanceType<typeof PaymentCreateNestedManyWithoutOrderInput>;
}
export declare class OrderCreateInput {
    status: keyof typeof TransactionStatus;
    shippingId?: number;
    isFullPaid: boolean;
    cost: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderBy: InstanceType<typeof UserCreateNestedOneWithoutOrdersInput>;
    items?: InstanceType<typeof ItemCreateNestedManyWithoutOrderInput>;
    shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutOrderInput>;
    payments?: InstanceType<typeof PaymentCreateNestedManyWithoutOrderInput>;
}
export declare class OrderGroupByArgs {
    where?: InstanceType<typeof OrderWhereInput>;
    orderBy?: Array<OrderOrderByWithAggregationInput>;
    by: Array<keyof typeof OrderScalarFieldEnum>;
    having?: InstanceType<typeof OrderScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof OrderCountAggregateInput>;
    _avg?: InstanceType<typeof OrderAvgAggregateInput>;
    _sum?: InstanceType<typeof OrderSumAggregateInput>;
    _min?: InstanceType<typeof OrderMinAggregateInput>;
    _max?: InstanceType<typeof OrderMaxAggregateInput>;
}
export declare class OrderGroupBy {
    id: number;
    status: keyof typeof TransactionStatus;
    orderById: string;
    shippingId?: number;
    isFullPaid: boolean;
    cost: number;
    platformFee: number;
    total: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof OrderCountAggregate>;
    _avg?: InstanceType<typeof OrderAvgAggregate>;
    _sum?: InstanceType<typeof OrderSumAggregate>;
    _min?: InstanceType<typeof OrderMinAggregate>;
    _max?: InstanceType<typeof OrderMaxAggregate>;
}
export declare class OrderListRelationFilter {
    every?: InstanceType<typeof OrderWhereInput>;
    some?: InstanceType<typeof OrderWhereInput>;
    none?: InstanceType<typeof OrderWhereInput>;
}
export declare class OrderMaxAggregateInput {
    id?: true;
    status?: true;
    orderById?: true;
    shippingId?: true;
    isFullPaid?: true;
    cost?: true;
    platformFee?: true;
    total?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class OrderMaxAggregate {
    id?: number;
    status?: keyof typeof TransactionStatus;
    orderById?: string;
    shippingId?: number;
    isFullPaid?: boolean;
    cost?: number;
    platformFee?: number;
    total?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class OrderMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    orderById?: keyof typeof SortOrder;
    shippingId?: keyof typeof SortOrder;
    isFullPaid?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
    platformFee?: keyof typeof SortOrder;
    total?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class OrderMinAggregateInput {
    id?: true;
    status?: true;
    orderById?: true;
    shippingId?: true;
    isFullPaid?: true;
    cost?: true;
    platformFee?: true;
    total?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class OrderMinAggregate {
    id?: number;
    status?: keyof typeof TransactionStatus;
    orderById?: string;
    shippingId?: number;
    isFullPaid?: boolean;
    cost?: number;
    platformFee?: number;
    total?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class OrderMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    orderById?: keyof typeof SortOrder;
    shippingId?: keyof typeof SortOrder;
    isFullPaid?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
    platformFee?: keyof typeof SortOrder;
    total?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class OrderOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class OrderOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    orderById?: keyof typeof SortOrder;
    shippingId?: InstanceType<typeof SortOrderInput>;
    isFullPaid?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
    platformFee?: keyof typeof SortOrder;
    total?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof OrderCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof OrderAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof OrderMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof OrderMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof OrderSumOrderByAggregateInput>;
}
export declare class OrderOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    orderById?: keyof typeof SortOrder;
    shippingId?: InstanceType<typeof SortOrderInput>;
    isFullPaid?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
    platformFee?: keyof typeof SortOrder;
    total?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    orderBy?: InstanceType<typeof UserOrderByWithRelationInput>;
    items?: InstanceType<typeof ItemOrderByRelationAggregateInput>;
    shipping?: InstanceType<typeof ShippingOrderByWithRelationInput>;
    payments?: InstanceType<typeof PaymentOrderByRelationAggregateInput>;
}
export declare class OrderRelationFilter {
    is?: InstanceType<typeof OrderWhereInput>;
    isNot?: InstanceType<typeof OrderWhereInput>;
}
export declare class OrderScalarWhereWithAggregatesInput {
    AND?: Array<OrderScalarWhereWithAggregatesInput>;
    OR?: Array<OrderScalarWhereWithAggregatesInput>;
    NOT?: Array<OrderScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    status?: InstanceType<typeof EnumTransactionStatusWithAggregatesFilter>;
    orderById?: InstanceType<typeof StringWithAggregatesFilter>;
    shippingId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    isFullPaid?: InstanceType<typeof BoolWithAggregatesFilter>;
    cost?: InstanceType<typeof FloatWithAggregatesFilter>;
    platformFee?: InstanceType<typeof FloatWithAggregatesFilter>;
    total?: InstanceType<typeof FloatWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class OrderScalarWhereInput {
    AND?: Array<OrderScalarWhereInput>;
    OR?: Array<OrderScalarWhereInput>;
    NOT?: Array<OrderScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    status?: InstanceType<typeof EnumTransactionStatusFilter>;
    orderById?: InstanceType<typeof StringFilter>;
    shippingId?: InstanceType<typeof IntNullableFilter>;
    isFullPaid?: InstanceType<typeof BoolFilter>;
    cost?: InstanceType<typeof FloatFilter>;
    platformFee?: InstanceType<typeof FloatFilter>;
    total?: InstanceType<typeof FloatFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class OrderSumAggregateInput {
    id?: true;
    shippingId?: true;
    cost?: true;
    platformFee?: true;
    total?: true;
}
export declare class OrderSumAggregate {
    id?: number;
    shippingId?: number;
    cost?: number;
    platformFee?: number;
    total?: number;
}
export declare class OrderSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    shippingId?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
    platformFee?: keyof typeof SortOrder;
    total?: keyof typeof SortOrder;
}
export declare class OrderUncheckedCreateNestedManyWithoutOrderByInput {
    create?: Array<OrderCreateWithoutOrderByInput>;
    connectOrCreate?: Array<OrderCreateOrConnectWithoutOrderByInput>;
    createMany?: InstanceType<typeof OrderCreateManyOrderByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>>;
}
export declare class OrderUncheckedCreateWithoutItemsInput {
    id?: number;
    status: keyof typeof TransactionStatus;
    orderById: string;
    shippingId?: number;
    isFullPaid: boolean;
    cost: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutOrderInput>;
    payments?: InstanceType<typeof PaymentUncheckedCreateNestedManyWithoutOrderInput>;
}
export declare class OrderUncheckedCreateWithoutOrderByInput {
    id?: number;
    status: keyof typeof TransactionStatus;
    shippingId?: number;
    isFullPaid: boolean;
    cost: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: InstanceType<typeof ItemUncheckedCreateNestedManyWithoutOrderInput>;
    shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutOrderInput>;
    payments?: InstanceType<typeof PaymentUncheckedCreateNestedManyWithoutOrderInput>;
}
export declare class OrderUncheckedCreateWithoutPaymentsInput {
    id?: number;
    status: keyof typeof TransactionStatus;
    orderById: string;
    shippingId?: number;
    isFullPaid: boolean;
    cost: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: InstanceType<typeof ItemUncheckedCreateNestedManyWithoutOrderInput>;
    shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutOrderInput>;
}
export declare class OrderUncheckedCreateWithoutShippingInput {
    id?: number;
    status: keyof typeof TransactionStatus;
    orderById: string;
    shippingId?: number;
    isFullPaid: boolean;
    cost: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: InstanceType<typeof ItemUncheckedCreateNestedManyWithoutOrderInput>;
    payments?: InstanceType<typeof PaymentUncheckedCreateNestedManyWithoutOrderInput>;
}
export declare class OrderUncheckedCreateInput {
    id?: number;
    status: keyof typeof TransactionStatus;
    orderById: string;
    shippingId?: number;
    isFullPaid: boolean;
    cost: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: InstanceType<typeof ItemUncheckedCreateNestedManyWithoutOrderInput>;
    shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutOrderInput>;
    payments?: InstanceType<typeof PaymentUncheckedCreateNestedManyWithoutOrderInput>;
}
export declare class OrderUncheckedUpdateManyWithoutOrderByNestedInput {
    create?: Array<OrderCreateWithoutOrderByInput>;
    connectOrCreate?: Array<OrderCreateOrConnectWithoutOrderByInput>;
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutOrderByInput>;
    createMany?: InstanceType<typeof OrderCreateManyOrderByInputEnvelope>;
    set?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>>;
    disconnect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>>;
    delete?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>>;
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>>;
    update?: Array<OrderUpdateWithWhereUniqueWithoutOrderByInput>;
    updateMany?: Array<OrderUpdateManyWithWhereWithoutOrderByInput>;
    deleteMany?: Array<OrderScalarWhereInput>;
}
export declare class OrderUncheckedUpdateManyWithoutOrderByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    isFullPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class OrderUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    orderById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    isFullPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class OrderUncheckedUpdateWithoutItemsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    orderById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    isFullPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutOrderNestedInput>;
    payments?: InstanceType<typeof PaymentUncheckedUpdateManyWithoutOrderNestedInput>;
}
export declare class OrderUncheckedUpdateWithoutOrderByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    isFullPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    items?: InstanceType<typeof ItemUncheckedUpdateManyWithoutOrderNestedInput>;
    shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutOrderNestedInput>;
    payments?: InstanceType<typeof PaymentUncheckedUpdateManyWithoutOrderNestedInput>;
}
export declare class OrderUncheckedUpdateWithoutPaymentsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    orderById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    isFullPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    items?: InstanceType<typeof ItemUncheckedUpdateManyWithoutOrderNestedInput>;
    shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutOrderNestedInput>;
}
export declare class OrderUncheckedUpdateWithoutShippingInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    orderById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    isFullPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    items?: InstanceType<typeof ItemUncheckedUpdateManyWithoutOrderNestedInput>;
    payments?: InstanceType<typeof PaymentUncheckedUpdateManyWithoutOrderNestedInput>;
}
export declare class OrderUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    orderById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    isFullPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    items?: InstanceType<typeof ItemUncheckedUpdateManyWithoutOrderNestedInput>;
    shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutOrderNestedInput>;
    payments?: InstanceType<typeof PaymentUncheckedUpdateManyWithoutOrderNestedInput>;
}
export declare class OrderUpdateManyMutationInput {
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    isFullPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class OrderUpdateManyWithWhereWithoutOrderByInput {
    where: InstanceType<typeof OrderScalarWhereInput>;
    data: InstanceType<typeof OrderUpdateManyMutationInput>;
}
export declare class OrderUpdateManyWithoutOrderByNestedInput {
    create?: Array<OrderCreateWithoutOrderByInput>;
    connectOrCreate?: Array<OrderCreateOrConnectWithoutOrderByInput>;
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutOrderByInput>;
    createMany?: InstanceType<typeof OrderCreateManyOrderByInputEnvelope>;
    set?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>>;
    disconnect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>>;
    delete?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>>;
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>>;
    update?: Array<OrderUpdateWithWhereUniqueWithoutOrderByInput>;
    updateMany?: Array<OrderUpdateManyWithWhereWithoutOrderByInput>;
    deleteMany?: Array<OrderScalarWhereInput>;
}
export declare class OrderUpdateOneRequiredWithoutItemsNestedInput {
    create?: InstanceType<typeof OrderCreateWithoutItemsInput>;
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutItemsInput>;
    upsert?: InstanceType<typeof OrderUpsertWithoutItemsInput>;
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
    update?: InstanceType<typeof OrderUpdateToOneWithWhereWithoutItemsInput>;
}
export declare class OrderUpdateOneRequiredWithoutPaymentsNestedInput {
    create?: InstanceType<typeof OrderCreateWithoutPaymentsInput>;
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutPaymentsInput>;
    upsert?: InstanceType<typeof OrderUpsertWithoutPaymentsInput>;
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
    update?: InstanceType<typeof OrderUpdateToOneWithWhereWithoutPaymentsInput>;
}
export declare class OrderUpdateOneRequiredWithoutShippingNestedInput {
    create?: InstanceType<typeof OrderCreateWithoutShippingInput>;
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutShippingInput>;
    upsert?: InstanceType<typeof OrderUpsertWithoutShippingInput>;
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
    update?: InstanceType<typeof OrderUpdateToOneWithWhereWithoutShippingInput>;
}
export declare class OrderUpdateToOneWithWhereWithoutItemsInput {
    where?: InstanceType<typeof OrderWhereInput>;
    data: InstanceType<typeof OrderUpdateWithoutItemsInput>;
}
export declare class OrderUpdateToOneWithWhereWithoutPaymentsInput {
    where?: InstanceType<typeof OrderWhereInput>;
    data: InstanceType<typeof OrderUpdateWithoutPaymentsInput>;
}
export declare class OrderUpdateToOneWithWhereWithoutShippingInput {
    where?: InstanceType<typeof OrderWhereInput>;
    data: InstanceType<typeof OrderUpdateWithoutShippingInput>;
}
export declare class OrderUpdateWithWhereUniqueWithoutOrderByInput {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
    data: InstanceType<typeof OrderUpdateWithoutOrderByInput>;
}
export declare class OrderUpdateWithoutItemsInput {
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    isFullPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    orderBy?: InstanceType<typeof UserUpdateOneRequiredWithoutOrdersNestedInput>;
    shipping?: InstanceType<typeof ShippingUpdateOneWithoutOrderNestedInput>;
    payments?: InstanceType<typeof PaymentUpdateManyWithoutOrderNestedInput>;
}
export declare class OrderUpdateWithoutOrderByInput {
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    isFullPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    items?: InstanceType<typeof ItemUpdateManyWithoutOrderNestedInput>;
    shipping?: InstanceType<typeof ShippingUpdateOneWithoutOrderNestedInput>;
    payments?: InstanceType<typeof PaymentUpdateManyWithoutOrderNestedInput>;
}
export declare class OrderUpdateWithoutPaymentsInput {
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    isFullPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    orderBy?: InstanceType<typeof UserUpdateOneRequiredWithoutOrdersNestedInput>;
    items?: InstanceType<typeof ItemUpdateManyWithoutOrderNestedInput>;
    shipping?: InstanceType<typeof ShippingUpdateOneWithoutOrderNestedInput>;
}
export declare class OrderUpdateWithoutShippingInput {
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    isFullPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    orderBy?: InstanceType<typeof UserUpdateOneRequiredWithoutOrdersNestedInput>;
    items?: InstanceType<typeof ItemUpdateManyWithoutOrderNestedInput>;
    payments?: InstanceType<typeof PaymentUpdateManyWithoutOrderNestedInput>;
}
export declare class OrderUpdateInput {
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    isFullPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    orderBy?: InstanceType<typeof UserUpdateOneRequiredWithoutOrdersNestedInput>;
    items?: InstanceType<typeof ItemUpdateManyWithoutOrderNestedInput>;
    shipping?: InstanceType<typeof ShippingUpdateOneWithoutOrderNestedInput>;
    payments?: InstanceType<typeof PaymentUpdateManyWithoutOrderNestedInput>;
}
export declare class OrderUpsertWithWhereUniqueWithoutOrderByInput {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
    update: InstanceType<typeof OrderUpdateWithoutOrderByInput>;
    create: InstanceType<typeof OrderCreateWithoutOrderByInput>;
}
export declare class OrderUpsertWithoutItemsInput {
    update: InstanceType<typeof OrderUpdateWithoutItemsInput>;
    create: InstanceType<typeof OrderCreateWithoutItemsInput>;
    where?: InstanceType<typeof OrderWhereInput>;
}
export declare class OrderUpsertWithoutPaymentsInput {
    update: InstanceType<typeof OrderUpdateWithoutPaymentsInput>;
    create: InstanceType<typeof OrderCreateWithoutPaymentsInput>;
    where?: InstanceType<typeof OrderWhereInput>;
}
export declare class OrderUpsertWithoutShippingInput {
    update: InstanceType<typeof OrderUpdateWithoutShippingInput>;
    create: InstanceType<typeof OrderCreateWithoutShippingInput>;
    where?: InstanceType<typeof OrderWhereInput>;
}
export declare class OrderWhereUniqueInput {
    id?: number;
    orderById?: string;
    AND?: Array<OrderWhereInput>;
    OR?: Array<OrderWhereInput>;
    NOT?: Array<OrderWhereInput>;
    status?: InstanceType<typeof EnumTransactionStatusFilter>;
    shippingId?: InstanceType<typeof IntNullableFilter>;
    isFullPaid?: InstanceType<typeof BoolFilter>;
    cost?: InstanceType<typeof FloatFilter>;
    platformFee?: InstanceType<typeof FloatFilter>;
    total?: InstanceType<typeof FloatFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    orderBy?: InstanceType<typeof UserRelationFilter>;
    items?: InstanceType<typeof ItemListRelationFilter>;
    shipping?: InstanceType<typeof ShippingNullableRelationFilter>;
    payments?: InstanceType<typeof PaymentListRelationFilter>;
}
export declare class OrderWhereInput {
    AND?: Array<OrderWhereInput>;
    OR?: Array<OrderWhereInput>;
    NOT?: Array<OrderWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    status?: InstanceType<typeof EnumTransactionStatusFilter>;
    orderById?: InstanceType<typeof StringFilter>;
    shippingId?: InstanceType<typeof IntNullableFilter>;
    isFullPaid?: InstanceType<typeof BoolFilter>;
    cost?: InstanceType<typeof FloatFilter>;
    platformFee?: InstanceType<typeof FloatFilter>;
    total?: InstanceType<typeof FloatFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    orderBy?: InstanceType<typeof UserRelationFilter>;
    items?: InstanceType<typeof ItemListRelationFilter>;
    shipping?: InstanceType<typeof ShippingNullableRelationFilter>;
    payments?: InstanceType<typeof PaymentListRelationFilter>;
}
export declare class Order {
    id: number;
    status: keyof typeof TransactionStatus;
    orderById: string;
    shippingId: number | null;
    isFullPaid: boolean;
    cost: number;
    platformFee: number;
    total: number;
    createdAt: Date;
    updatedAt: Date;
    orderBy?: InstanceType<typeof User>;
    items?: Array<Item>;
    shipping?: InstanceType<typeof Shipping> | null;
    payments?: Array<Payment>;
    _count?: InstanceType<typeof OrderCount>;
}
export declare class UpdateManyOrderArgs {
    data: InstanceType<typeof OrderUpdateManyMutationInput>;
    where?: InstanceType<typeof OrderWhereInput>;
}
export declare class UpdateOneOrderArgs {
    data: InstanceType<typeof OrderUpdateInput>;
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
}
export declare class UpsertOneOrderArgs {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
    create: InstanceType<typeof OrderCreateInput>;
    update: InstanceType<typeof OrderUpdateInput>;
}
export declare class AggregatePayment {
    _count?: InstanceType<typeof PaymentCountAggregate>;
    _avg?: InstanceType<typeof PaymentAvgAggregate>;
    _sum?: InstanceType<typeof PaymentSumAggregate>;
    _min?: InstanceType<typeof PaymentMinAggregate>;
    _max?: InstanceType<typeof PaymentMaxAggregate>;
}
export declare class CreateManyPaymentArgs {
    data: Array<PaymentCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOnePaymentArgs {
    data: InstanceType<typeof PaymentCreateInput>;
}
export declare class DeleteManyPaymentArgs {
    where?: InstanceType<typeof PaymentWhereInput>;
}
export declare class DeleteOnePaymentArgs {
    where: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
}
export declare class FindFirstPaymentOrThrowArgs {
    where?: InstanceType<typeof PaymentWhereInput>;
    orderBy?: Array<PaymentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PaymentScalarFieldEnum>;
}
export declare class FindFirstPaymentArgs {
    where?: InstanceType<typeof PaymentWhereInput>;
    orderBy?: Array<PaymentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PaymentScalarFieldEnum>;
}
export declare class FindManyPaymentArgs {
    where?: InstanceType<typeof PaymentWhereInput>;
    orderBy?: Array<PaymentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PaymentScalarFieldEnum>;
}
export declare class FindUniquePaymentOrThrowArgs {
    where: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
}
export declare class FindUniquePaymentArgs {
    where: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
}
export declare class PaymentAggregateArgs {
    where?: InstanceType<typeof PaymentWhereInput>;
    orderBy?: Array<PaymentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof PaymentCountAggregateInput>;
    _avg?: InstanceType<typeof PaymentAvgAggregateInput>;
    _sum?: InstanceType<typeof PaymentSumAggregateInput>;
    _min?: InstanceType<typeof PaymentMinAggregateInput>;
    _max?: InstanceType<typeof PaymentMaxAggregateInput>;
}
export declare class PaymentAvgAggregateInput {
    id?: true;
    adminFee?: true;
    totalPayment?: true;
    orderId?: true;
    transactionId?: true;
}
export declare class PaymentAvgAggregate {
    id?: number;
    adminFee?: number;
    totalPayment?: number;
    orderId?: number;
    transactionId?: number;
}
export declare class PaymentAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    adminFee?: keyof typeof SortOrder;
    totalPayment?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    transactionId?: keyof typeof SortOrder;
}
export declare class PaymentCountAggregateInput {
    id?: true;
    adminFee?: true;
    totalPayment?: true;
    orderId?: true;
    transactionId?: true;
    createdAt?: true;
    _all?: true;
}
export declare class PaymentCountAggregate {
    id: number;
    adminFee: number;
    totalPayment: number;
    orderId: number;
    transactionId: number;
    createdAt: number;
    _all: number;
}
export declare class PaymentCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    adminFee?: keyof typeof SortOrder;
    totalPayment?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    transactionId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class PaymentCreateManyOrderInputEnvelope {
    data: Array<PaymentCreateManyOrderInput>;
    skipDuplicates?: boolean;
}
export declare class PaymentCreateManyOrderInput {
    id?: number;
    adminFee: number;
    totalPayment: number;
    transactionId: number;
    createdAt?: Date | string;
}
export declare class PaymentCreateManyInput {
    id?: number;
    adminFee: number;
    totalPayment: number;
    orderId: number;
    transactionId: number;
    createdAt?: Date | string;
}
export declare class PaymentCreateNestedManyWithoutOrderInput {
    create?: Array<PaymentCreateWithoutOrderInput>;
    connectOrCreate?: Array<PaymentCreateOrConnectWithoutOrderInput>;
    createMany?: InstanceType<typeof PaymentCreateManyOrderInputEnvelope>;
    connect?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>>;
}
export declare class PaymentCreateNestedOneWithoutConfirmationInput {
    create?: InstanceType<typeof PaymentCreateWithoutConfirmationInput>;
    connectOrCreate?: InstanceType<typeof PaymentCreateOrConnectWithoutConfirmationInput>;
    connect?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
}
export declare class PaymentCreateNestedOneWithoutTransactionInput {
    create?: InstanceType<typeof PaymentCreateWithoutTransactionInput>;
    connectOrCreate?: InstanceType<typeof PaymentCreateOrConnectWithoutTransactionInput>;
    connect?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
}
export declare class PaymentCreateOrConnectWithoutConfirmationInput {
    where: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
    create: InstanceType<typeof PaymentCreateWithoutConfirmationInput>;
}
export declare class PaymentCreateOrConnectWithoutOrderInput {
    where: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
    create: InstanceType<typeof PaymentCreateWithoutOrderInput>;
}
export declare class PaymentCreateOrConnectWithoutTransactionInput {
    where: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
    create: InstanceType<typeof PaymentCreateWithoutTransactionInput>;
}
export declare class PaymentCreateWithoutConfirmationInput {
    adminFee: number;
    totalPayment: number;
    createdAt?: Date | string;
    order: InstanceType<typeof OrderCreateNestedOneWithoutPaymentsInput>;
    transaction: InstanceType<typeof TransactionCreateNestedOneWithoutPaymentInput>;
}
export declare class PaymentCreateWithoutOrderInput {
    adminFee: number;
    totalPayment: number;
    createdAt?: Date | string;
    transaction: InstanceType<typeof TransactionCreateNestedOneWithoutPaymentInput>;
    confirmation?: InstanceType<typeof PaymentConfirmationCreateNestedOneWithoutPaymentInput>;
}
export declare class PaymentCreateWithoutTransactionInput {
    adminFee: number;
    totalPayment: number;
    createdAt?: Date | string;
    order: InstanceType<typeof OrderCreateNestedOneWithoutPaymentsInput>;
    confirmation?: InstanceType<typeof PaymentConfirmationCreateNestedOneWithoutPaymentInput>;
}
export declare class PaymentCreateInput {
    adminFee: number;
    totalPayment: number;
    createdAt?: Date | string;
    order: InstanceType<typeof OrderCreateNestedOneWithoutPaymentsInput>;
    transaction: InstanceType<typeof TransactionCreateNestedOneWithoutPaymentInput>;
    confirmation?: InstanceType<typeof PaymentConfirmationCreateNestedOneWithoutPaymentInput>;
}
export declare class PaymentGroupByArgs {
    where?: InstanceType<typeof PaymentWhereInput>;
    orderBy?: Array<PaymentOrderByWithAggregationInput>;
    by: Array<keyof typeof PaymentScalarFieldEnum>;
    having?: InstanceType<typeof PaymentScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof PaymentCountAggregateInput>;
    _avg?: InstanceType<typeof PaymentAvgAggregateInput>;
    _sum?: InstanceType<typeof PaymentSumAggregateInput>;
    _min?: InstanceType<typeof PaymentMinAggregateInput>;
    _max?: InstanceType<typeof PaymentMaxAggregateInput>;
}
export declare class PaymentGroupBy {
    id: number;
    adminFee: number;
    totalPayment: number;
    orderId: number;
    transactionId: number;
    createdAt: Date | string;
    _count?: InstanceType<typeof PaymentCountAggregate>;
    _avg?: InstanceType<typeof PaymentAvgAggregate>;
    _sum?: InstanceType<typeof PaymentSumAggregate>;
    _min?: InstanceType<typeof PaymentMinAggregate>;
    _max?: InstanceType<typeof PaymentMaxAggregate>;
}
export declare class PaymentListRelationFilter {
    every?: InstanceType<typeof PaymentWhereInput>;
    some?: InstanceType<typeof PaymentWhereInput>;
    none?: InstanceType<typeof PaymentWhereInput>;
}
export declare class PaymentMaxAggregateInput {
    id?: true;
    adminFee?: true;
    totalPayment?: true;
    orderId?: true;
    transactionId?: true;
    createdAt?: true;
}
export declare class PaymentMaxAggregate {
    id?: number;
    adminFee?: number;
    totalPayment?: number;
    orderId?: number;
    transactionId?: number;
    createdAt?: Date | string;
}
export declare class PaymentMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    adminFee?: keyof typeof SortOrder;
    totalPayment?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    transactionId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class PaymentMinAggregateInput {
    id?: true;
    adminFee?: true;
    totalPayment?: true;
    orderId?: true;
    transactionId?: true;
    createdAt?: true;
}
export declare class PaymentMinAggregate {
    id?: number;
    adminFee?: number;
    totalPayment?: number;
    orderId?: number;
    transactionId?: number;
    createdAt?: Date | string;
}
export declare class PaymentMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    adminFee?: keyof typeof SortOrder;
    totalPayment?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    transactionId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class PaymentNullableRelationFilter {
    is?: InstanceType<typeof PaymentWhereInput>;
    isNot?: InstanceType<typeof PaymentWhereInput>;
}
export declare class PaymentOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class PaymentOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    adminFee?: keyof typeof SortOrder;
    totalPayment?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    transactionId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof PaymentCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof PaymentAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof PaymentMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof PaymentMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof PaymentSumOrderByAggregateInput>;
}
export declare class PaymentOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    adminFee?: keyof typeof SortOrder;
    totalPayment?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    transactionId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    order?: InstanceType<typeof OrderOrderByWithRelationInput>;
    transaction?: InstanceType<typeof TransactionOrderByWithRelationInput>;
    confirmation?: InstanceType<typeof PaymentConfirmationOrderByWithRelationInput>;
}
export declare class PaymentRelationFilter {
    is?: InstanceType<typeof PaymentWhereInput>;
    isNot?: InstanceType<typeof PaymentWhereInput>;
}
export declare class PaymentScalarWhereWithAggregatesInput {
    AND?: Array<PaymentScalarWhereWithAggregatesInput>;
    OR?: Array<PaymentScalarWhereWithAggregatesInput>;
    NOT?: Array<PaymentScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    adminFee?: InstanceType<typeof FloatWithAggregatesFilter>;
    totalPayment?: InstanceType<typeof FloatWithAggregatesFilter>;
    orderId?: InstanceType<typeof IntWithAggregatesFilter>;
    transactionId?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class PaymentScalarWhereInput {
    AND?: Array<PaymentScalarWhereInput>;
    OR?: Array<PaymentScalarWhereInput>;
    NOT?: Array<PaymentScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    adminFee?: InstanceType<typeof FloatFilter>;
    totalPayment?: InstanceType<typeof FloatFilter>;
    orderId?: InstanceType<typeof IntFilter>;
    transactionId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class PaymentSumAggregateInput {
    id?: true;
    adminFee?: true;
    totalPayment?: true;
    orderId?: true;
    transactionId?: true;
}
export declare class PaymentSumAggregate {
    id?: number;
    adminFee?: number;
    totalPayment?: number;
    orderId?: number;
    transactionId?: number;
}
export declare class PaymentSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    adminFee?: keyof typeof SortOrder;
    totalPayment?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    transactionId?: keyof typeof SortOrder;
}
export declare class PaymentUncheckedCreateNestedManyWithoutOrderInput {
    create?: Array<PaymentCreateWithoutOrderInput>;
    connectOrCreate?: Array<PaymentCreateOrConnectWithoutOrderInput>;
    createMany?: InstanceType<typeof PaymentCreateManyOrderInputEnvelope>;
    connect?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>>;
}
export declare class PaymentUncheckedCreateNestedOneWithoutTransactionInput {
    create?: InstanceType<typeof PaymentCreateWithoutTransactionInput>;
    connectOrCreate?: InstanceType<typeof PaymentCreateOrConnectWithoutTransactionInput>;
    connect?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
}
export declare class PaymentUncheckedCreateWithoutConfirmationInput {
    id?: number;
    adminFee: number;
    totalPayment: number;
    orderId: number;
    transactionId: number;
    createdAt?: Date | string;
}
export declare class PaymentUncheckedCreateWithoutOrderInput {
    id?: number;
    adminFee: number;
    totalPayment: number;
    transactionId: number;
    createdAt?: Date | string;
    confirmation?: InstanceType<typeof PaymentConfirmationUncheckedCreateNestedOneWithoutPaymentInput>;
}
export declare class PaymentUncheckedCreateWithoutTransactionInput {
    id?: number;
    adminFee: number;
    totalPayment: number;
    orderId: number;
    createdAt?: Date | string;
    confirmation?: InstanceType<typeof PaymentConfirmationUncheckedCreateNestedOneWithoutPaymentInput>;
}
export declare class PaymentUncheckedCreateInput {
    id?: number;
    adminFee: number;
    totalPayment: number;
    orderId: number;
    transactionId: number;
    createdAt?: Date | string;
    confirmation?: InstanceType<typeof PaymentConfirmationUncheckedCreateNestedOneWithoutPaymentInput>;
}
export declare class PaymentUncheckedUpdateManyWithoutOrderNestedInput {
    create?: Array<PaymentCreateWithoutOrderInput>;
    connectOrCreate?: Array<PaymentCreateOrConnectWithoutOrderInput>;
    upsert?: Array<PaymentUpsertWithWhereUniqueWithoutOrderInput>;
    createMany?: InstanceType<typeof PaymentCreateManyOrderInputEnvelope>;
    set?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>>;
    disconnect?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>>;
    delete?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>>;
    connect?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>>;
    update?: Array<PaymentUpdateWithWhereUniqueWithoutOrderInput>;
    updateMany?: Array<PaymentUpdateManyWithWhereWithoutOrderInput>;
    deleteMany?: Array<PaymentScalarWhereInput>;
}
export declare class PaymentUncheckedUpdateManyWithoutOrderInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    totalPayment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PaymentUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    totalPayment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PaymentUncheckedUpdateOneWithoutTransactionNestedInput {
    create?: InstanceType<typeof PaymentCreateWithoutTransactionInput>;
    connectOrCreate?: InstanceType<typeof PaymentCreateOrConnectWithoutTransactionInput>;
    upsert?: InstanceType<typeof PaymentUpsertWithoutTransactionInput>;
    disconnect?: InstanceType<typeof PaymentWhereInput>;
    delete?: InstanceType<typeof PaymentWhereInput>;
    connect?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
    update?: InstanceType<typeof PaymentUpdateToOneWithWhereWithoutTransactionInput>;
}
export declare class PaymentUncheckedUpdateWithoutConfirmationInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    totalPayment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PaymentUncheckedUpdateWithoutOrderInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    totalPayment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    confirmation?: InstanceType<typeof PaymentConfirmationUncheckedUpdateOneWithoutPaymentNestedInput>;
}
export declare class PaymentUncheckedUpdateWithoutTransactionInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    totalPayment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    confirmation?: InstanceType<typeof PaymentConfirmationUncheckedUpdateOneWithoutPaymentNestedInput>;
}
export declare class PaymentUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    totalPayment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    confirmation?: InstanceType<typeof PaymentConfirmationUncheckedUpdateOneWithoutPaymentNestedInput>;
}
export declare class PaymentUpdateManyMutationInput {
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    totalPayment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PaymentUpdateManyWithWhereWithoutOrderInput {
    where: InstanceType<typeof PaymentScalarWhereInput>;
    data: InstanceType<typeof PaymentUpdateManyMutationInput>;
}
export declare class PaymentUpdateManyWithoutOrderNestedInput {
    create?: Array<PaymentCreateWithoutOrderInput>;
    connectOrCreate?: Array<PaymentCreateOrConnectWithoutOrderInput>;
    upsert?: Array<PaymentUpsertWithWhereUniqueWithoutOrderInput>;
    createMany?: InstanceType<typeof PaymentCreateManyOrderInputEnvelope>;
    set?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>>;
    disconnect?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>>;
    delete?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>>;
    connect?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>>;
    update?: Array<PaymentUpdateWithWhereUniqueWithoutOrderInput>;
    updateMany?: Array<PaymentUpdateManyWithWhereWithoutOrderInput>;
    deleteMany?: Array<PaymentScalarWhereInput>;
}
export declare class PaymentUpdateOneRequiredWithoutConfirmationNestedInput {
    create?: InstanceType<typeof PaymentCreateWithoutConfirmationInput>;
    connectOrCreate?: InstanceType<typeof PaymentCreateOrConnectWithoutConfirmationInput>;
    upsert?: InstanceType<typeof PaymentUpsertWithoutConfirmationInput>;
    connect?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
    update?: InstanceType<typeof PaymentUpdateToOneWithWhereWithoutConfirmationInput>;
}
export declare class PaymentUpdateOneWithoutTransactionNestedInput {
    create?: InstanceType<typeof PaymentCreateWithoutTransactionInput>;
    connectOrCreate?: InstanceType<typeof PaymentCreateOrConnectWithoutTransactionInput>;
    upsert?: InstanceType<typeof PaymentUpsertWithoutTransactionInput>;
    disconnect?: InstanceType<typeof PaymentWhereInput>;
    delete?: InstanceType<typeof PaymentWhereInput>;
    connect?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
    update?: InstanceType<typeof PaymentUpdateToOneWithWhereWithoutTransactionInput>;
}
export declare class PaymentUpdateToOneWithWhereWithoutConfirmationInput {
    where?: InstanceType<typeof PaymentWhereInput>;
    data: InstanceType<typeof PaymentUpdateWithoutConfirmationInput>;
}
export declare class PaymentUpdateToOneWithWhereWithoutTransactionInput {
    where?: InstanceType<typeof PaymentWhereInput>;
    data: InstanceType<typeof PaymentUpdateWithoutTransactionInput>;
}
export declare class PaymentUpdateWithWhereUniqueWithoutOrderInput {
    where: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
    data: InstanceType<typeof PaymentUpdateWithoutOrderInput>;
}
export declare class PaymentUpdateWithoutConfirmationInput {
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    totalPayment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    order?: InstanceType<typeof OrderUpdateOneRequiredWithoutPaymentsNestedInput>;
    transaction?: InstanceType<typeof TransactionUpdateOneRequiredWithoutPaymentNestedInput>;
}
export declare class PaymentUpdateWithoutOrderInput {
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    totalPayment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    transaction?: InstanceType<typeof TransactionUpdateOneRequiredWithoutPaymentNestedInput>;
    confirmation?: InstanceType<typeof PaymentConfirmationUpdateOneWithoutPaymentNestedInput>;
}
export declare class PaymentUpdateWithoutTransactionInput {
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    totalPayment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    order?: InstanceType<typeof OrderUpdateOneRequiredWithoutPaymentsNestedInput>;
    confirmation?: InstanceType<typeof PaymentConfirmationUpdateOneWithoutPaymentNestedInput>;
}
export declare class PaymentUpdateInput {
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    totalPayment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    order?: InstanceType<typeof OrderUpdateOneRequiredWithoutPaymentsNestedInput>;
    transaction?: InstanceType<typeof TransactionUpdateOneRequiredWithoutPaymentNestedInput>;
    confirmation?: InstanceType<typeof PaymentConfirmationUpdateOneWithoutPaymentNestedInput>;
}
export declare class PaymentUpsertWithWhereUniqueWithoutOrderInput {
    where: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
    update: InstanceType<typeof PaymentUpdateWithoutOrderInput>;
    create: InstanceType<typeof PaymentCreateWithoutOrderInput>;
}
export declare class PaymentUpsertWithoutConfirmationInput {
    update: InstanceType<typeof PaymentUpdateWithoutConfirmationInput>;
    create: InstanceType<typeof PaymentCreateWithoutConfirmationInput>;
    where?: InstanceType<typeof PaymentWhereInput>;
}
export declare class PaymentUpsertWithoutTransactionInput {
    update: InstanceType<typeof PaymentUpdateWithoutTransactionInput>;
    create: InstanceType<typeof PaymentCreateWithoutTransactionInput>;
    where?: InstanceType<typeof PaymentWhereInput>;
}
export declare class PaymentWhereUniqueInput {
    id?: number;
    transactionId?: number;
    AND?: Array<PaymentWhereInput>;
    OR?: Array<PaymentWhereInput>;
    NOT?: Array<PaymentWhereInput>;
    adminFee?: InstanceType<typeof FloatFilter>;
    totalPayment?: InstanceType<typeof FloatFilter>;
    orderId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    order?: InstanceType<typeof OrderRelationFilter>;
    transaction?: InstanceType<typeof TransactionRelationFilter>;
    confirmation?: InstanceType<typeof PaymentConfirmationNullableRelationFilter>;
}
export declare class PaymentWhereInput {
    AND?: Array<PaymentWhereInput>;
    OR?: Array<PaymentWhereInput>;
    NOT?: Array<PaymentWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    adminFee?: InstanceType<typeof FloatFilter>;
    totalPayment?: InstanceType<typeof FloatFilter>;
    orderId?: InstanceType<typeof IntFilter>;
    transactionId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    order?: InstanceType<typeof OrderRelationFilter>;
    transaction?: InstanceType<typeof TransactionRelationFilter>;
    confirmation?: InstanceType<typeof PaymentConfirmationNullableRelationFilter>;
}
export declare class Payment {
    id: number;
    adminFee: number;
    totalPayment: number;
    orderId: number;
    transactionId: number;
    createdAt: Date;
    order?: InstanceType<typeof Order>;
    transaction?: InstanceType<typeof Transaction>;
    confirmation?: InstanceType<typeof PaymentConfirmation> | null;
}
export declare class UpdateManyPaymentArgs {
    data: InstanceType<typeof PaymentUpdateManyMutationInput>;
    where?: InstanceType<typeof PaymentWhereInput>;
}
export declare class UpdateOnePaymentArgs {
    data: InstanceType<typeof PaymentUpdateInput>;
    where: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
}
export declare class UpsertOnePaymentArgs {
    where: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
    create: InstanceType<typeof PaymentCreateInput>;
    update: InstanceType<typeof PaymentUpdateInput>;
}
export declare class AggregatePaymentConfirmation {
    _count?: InstanceType<typeof PaymentConfirmationCountAggregate>;
    _avg?: InstanceType<typeof PaymentConfirmationAvgAggregate>;
    _sum?: InstanceType<typeof PaymentConfirmationSumAggregate>;
    _min?: InstanceType<typeof PaymentConfirmationMinAggregate>;
    _max?: InstanceType<typeof PaymentConfirmationMaxAggregate>;
}
export declare class CreateManyPaymentConfirmationArgs {
    data: Array<PaymentConfirmationCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOnePaymentConfirmationArgs {
    data: InstanceType<typeof PaymentConfirmationCreateInput>;
}
export declare class DeleteManyPaymentConfirmationArgs {
    where?: InstanceType<typeof PaymentConfirmationWhereInput>;
}
export declare class DeleteOnePaymentConfirmationArgs {
    where: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;
}
export declare class FindFirstPaymentConfirmationOrThrowArgs {
    where?: InstanceType<typeof PaymentConfirmationWhereInput>;
    orderBy?: Array<PaymentConfirmationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PaymentConfirmationScalarFieldEnum>;
}
export declare class FindFirstPaymentConfirmationArgs {
    where?: InstanceType<typeof PaymentConfirmationWhereInput>;
    orderBy?: Array<PaymentConfirmationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PaymentConfirmationScalarFieldEnum>;
}
export declare class FindManyPaymentConfirmationArgs {
    where?: InstanceType<typeof PaymentConfirmationWhereInput>;
    orderBy?: Array<PaymentConfirmationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PaymentConfirmationScalarFieldEnum>;
}
export declare class FindUniquePaymentConfirmationOrThrowArgs {
    where: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;
}
export declare class FindUniquePaymentConfirmationArgs {
    where: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;
}
export declare class PaymentConfirmationAggregateArgs {
    where?: InstanceType<typeof PaymentConfirmationWhereInput>;
    orderBy?: Array<PaymentConfirmationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof PaymentConfirmationCountAggregateInput>;
    _avg?: InstanceType<typeof PaymentConfirmationAvgAggregateInput>;
    _sum?: InstanceType<typeof PaymentConfirmationSumAggregateInput>;
    _min?: InstanceType<typeof PaymentConfirmationMinAggregateInput>;
    _max?: InstanceType<typeof PaymentConfirmationMaxAggregateInput>;
}
export declare class PaymentConfirmationAvgAggregateInput {
    id?: true;
    paymentId?: true;
}
export declare class PaymentConfirmationAvgAggregate {
    id?: number;
    paymentId?: number;
}
export declare class PaymentConfirmationAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    paymentId?: keyof typeof SortOrder;
}
export declare class PaymentConfirmationCountAggregateInput {
    id?: true;
    ProofUrl?: true;
    paymentId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class PaymentConfirmationCountAggregate {
    id: number;
    ProofUrl: number;
    paymentId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class PaymentConfirmationCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    ProofUrl?: keyof typeof SortOrder;
    paymentId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class PaymentConfirmationCreateManyInput {
    id?: number;
    ProofUrl: string;
    paymentId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class PaymentConfirmationCreateNestedOneWithoutPaymentInput {
    create?: InstanceType<typeof PaymentConfirmationCreateWithoutPaymentInput>;
    connectOrCreate?: InstanceType<typeof PaymentConfirmationCreateOrConnectWithoutPaymentInput>;
    connect?: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;
}
export declare class PaymentConfirmationCreateOrConnectWithoutPaymentInput {
    where: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;
    create: InstanceType<typeof PaymentConfirmationCreateWithoutPaymentInput>;
}
export declare class PaymentConfirmationCreateWithoutPaymentInput {
    ProofUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class PaymentConfirmationCreateInput {
    ProofUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payment: InstanceType<typeof PaymentCreateNestedOneWithoutConfirmationInput>;
}
export declare class PaymentConfirmationGroupByArgs {
    where?: InstanceType<typeof PaymentConfirmationWhereInput>;
    orderBy?: Array<PaymentConfirmationOrderByWithAggregationInput>;
    by: Array<keyof typeof PaymentConfirmationScalarFieldEnum>;
    having?: InstanceType<typeof PaymentConfirmationScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof PaymentConfirmationCountAggregateInput>;
    _avg?: InstanceType<typeof PaymentConfirmationAvgAggregateInput>;
    _sum?: InstanceType<typeof PaymentConfirmationSumAggregateInput>;
    _min?: InstanceType<typeof PaymentConfirmationMinAggregateInput>;
    _max?: InstanceType<typeof PaymentConfirmationMaxAggregateInput>;
}
export declare class PaymentConfirmationGroupBy {
    id: number;
    ProofUrl: string;
    paymentId: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof PaymentConfirmationCountAggregate>;
    _avg?: InstanceType<typeof PaymentConfirmationAvgAggregate>;
    _sum?: InstanceType<typeof PaymentConfirmationSumAggregate>;
    _min?: InstanceType<typeof PaymentConfirmationMinAggregate>;
    _max?: InstanceType<typeof PaymentConfirmationMaxAggregate>;
}
export declare class PaymentConfirmationMaxAggregateInput {
    id?: true;
    ProofUrl?: true;
    paymentId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class PaymentConfirmationMaxAggregate {
    id?: number;
    ProofUrl?: string;
    paymentId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class PaymentConfirmationMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    ProofUrl?: keyof typeof SortOrder;
    paymentId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class PaymentConfirmationMinAggregateInput {
    id?: true;
    ProofUrl?: true;
    paymentId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class PaymentConfirmationMinAggregate {
    id?: number;
    ProofUrl?: string;
    paymentId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class PaymentConfirmationMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    ProofUrl?: keyof typeof SortOrder;
    paymentId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class PaymentConfirmationNullableRelationFilter {
    is?: InstanceType<typeof PaymentConfirmationWhereInput>;
    isNot?: InstanceType<typeof PaymentConfirmationWhereInput>;
}
export declare class PaymentConfirmationOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    ProofUrl?: keyof typeof SortOrder;
    paymentId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof PaymentConfirmationCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof PaymentConfirmationAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof PaymentConfirmationMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof PaymentConfirmationMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof PaymentConfirmationSumOrderByAggregateInput>;
}
export declare class PaymentConfirmationOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    ProofUrl?: keyof typeof SortOrder;
    paymentId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    payment?: InstanceType<typeof PaymentOrderByWithRelationInput>;
}
export declare class PaymentConfirmationScalarWhereWithAggregatesInput {
    AND?: Array<PaymentConfirmationScalarWhereWithAggregatesInput>;
    OR?: Array<PaymentConfirmationScalarWhereWithAggregatesInput>;
    NOT?: Array<PaymentConfirmationScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    ProofUrl?: InstanceType<typeof StringWithAggregatesFilter>;
    paymentId?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class PaymentConfirmationSumAggregateInput {
    id?: true;
    paymentId?: true;
}
export declare class PaymentConfirmationSumAggregate {
    id?: number;
    paymentId?: number;
}
export declare class PaymentConfirmationSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    paymentId?: keyof typeof SortOrder;
}
export declare class PaymentConfirmationUncheckedCreateNestedOneWithoutPaymentInput {
    create?: InstanceType<typeof PaymentConfirmationCreateWithoutPaymentInput>;
    connectOrCreate?: InstanceType<typeof PaymentConfirmationCreateOrConnectWithoutPaymentInput>;
    connect?: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;
}
export declare class PaymentConfirmationUncheckedCreateWithoutPaymentInput {
    id?: number;
    ProofUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class PaymentConfirmationUncheckedCreateInput {
    id?: number;
    ProofUrl: string;
    paymentId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class PaymentConfirmationUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    ProofUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    paymentId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PaymentConfirmationUncheckedUpdateOneWithoutPaymentNestedInput {
    create?: InstanceType<typeof PaymentConfirmationCreateWithoutPaymentInput>;
    connectOrCreate?: InstanceType<typeof PaymentConfirmationCreateOrConnectWithoutPaymentInput>;
    upsert?: InstanceType<typeof PaymentConfirmationUpsertWithoutPaymentInput>;
    disconnect?: InstanceType<typeof PaymentConfirmationWhereInput>;
    delete?: InstanceType<typeof PaymentConfirmationWhereInput>;
    connect?: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;
    update?: InstanceType<typeof PaymentConfirmationUpdateToOneWithWhereWithoutPaymentInput>;
}
export declare class PaymentConfirmationUncheckedUpdateWithoutPaymentInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    ProofUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PaymentConfirmationUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    ProofUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    paymentId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PaymentConfirmationUpdateManyMutationInput {
    ProofUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PaymentConfirmationUpdateOneWithoutPaymentNestedInput {
    create?: InstanceType<typeof PaymentConfirmationCreateWithoutPaymentInput>;
    connectOrCreate?: InstanceType<typeof PaymentConfirmationCreateOrConnectWithoutPaymentInput>;
    upsert?: InstanceType<typeof PaymentConfirmationUpsertWithoutPaymentInput>;
    disconnect?: InstanceType<typeof PaymentConfirmationWhereInput>;
    delete?: InstanceType<typeof PaymentConfirmationWhereInput>;
    connect?: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;
    update?: InstanceType<typeof PaymentConfirmationUpdateToOneWithWhereWithoutPaymentInput>;
}
export declare class PaymentConfirmationUpdateToOneWithWhereWithoutPaymentInput {
    where?: InstanceType<typeof PaymentConfirmationWhereInput>;
    data: InstanceType<typeof PaymentConfirmationUpdateWithoutPaymentInput>;
}
export declare class PaymentConfirmationUpdateWithoutPaymentInput {
    ProofUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PaymentConfirmationUpdateInput {
    ProofUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    payment?: InstanceType<typeof PaymentUpdateOneRequiredWithoutConfirmationNestedInput>;
}
export declare class PaymentConfirmationUpsertWithoutPaymentInput {
    update: InstanceType<typeof PaymentConfirmationUpdateWithoutPaymentInput>;
    create: InstanceType<typeof PaymentConfirmationCreateWithoutPaymentInput>;
    where?: InstanceType<typeof PaymentConfirmationWhereInput>;
}
export declare class PaymentConfirmationWhereUniqueInput {
    id?: number;
    paymentId?: number;
    AND?: Array<PaymentConfirmationWhereInput>;
    OR?: Array<PaymentConfirmationWhereInput>;
    NOT?: Array<PaymentConfirmationWhereInput>;
    ProofUrl?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    payment?: InstanceType<typeof PaymentRelationFilter>;
}
export declare class PaymentConfirmationWhereInput {
    AND?: Array<PaymentConfirmationWhereInput>;
    OR?: Array<PaymentConfirmationWhereInput>;
    NOT?: Array<PaymentConfirmationWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    ProofUrl?: InstanceType<typeof StringFilter>;
    paymentId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    payment?: InstanceType<typeof PaymentRelationFilter>;
}
export declare class PaymentConfirmation {
    id: number;
    ProofUrl: string;
    paymentId: number;
    createdAt: Date;
    updatedAt: Date;
    payment?: InstanceType<typeof Payment>;
}
export declare class UpdateManyPaymentConfirmationArgs {
    data: InstanceType<typeof PaymentConfirmationUpdateManyMutationInput>;
    where?: InstanceType<typeof PaymentConfirmationWhereInput>;
}
export declare class UpdateOnePaymentConfirmationArgs {
    data: InstanceType<typeof PaymentConfirmationUpdateInput>;
    where: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;
}
export declare class UpsertOnePaymentConfirmationArgs {
    where: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;
    create: InstanceType<typeof PaymentConfirmationCreateInput>;
    update: InstanceType<typeof PaymentConfirmationUpdateInput>;
}
export declare class AggregatePointTransaction {
    _count?: InstanceType<typeof PointTransactionCountAggregate>;
    _avg?: InstanceType<typeof PointTransactionAvgAggregate>;
    _sum?: InstanceType<typeof PointTransactionSumAggregate>;
    _min?: InstanceType<typeof PointTransactionMinAggregate>;
    _max?: InstanceType<typeof PointTransactionMaxAggregate>;
}
export declare class CreateManyPointTransactionArgs {
    data: Array<PointTransactionCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOnePointTransactionArgs {
    data: InstanceType<typeof PointTransactionCreateInput>;
}
export declare class DeleteManyPointTransactionArgs {
    where?: InstanceType<typeof PointTransactionWhereInput>;
}
export declare class DeleteOnePointTransactionArgs {
    where: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;
}
export declare class FindFirstPointTransactionOrThrowArgs {
    where?: InstanceType<typeof PointTransactionWhereInput>;
    orderBy?: Array<PointTransactionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PointTransactionScalarFieldEnum>;
}
export declare class FindFirstPointTransactionArgs {
    where?: InstanceType<typeof PointTransactionWhereInput>;
    orderBy?: Array<PointTransactionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PointTransactionScalarFieldEnum>;
}
export declare class FindManyPointTransactionArgs {
    where?: InstanceType<typeof PointTransactionWhereInput>;
    orderBy?: Array<PointTransactionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PointTransactionScalarFieldEnum>;
}
export declare class FindUniquePointTransactionOrThrowArgs {
    where: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;
}
export declare class FindUniquePointTransactionArgs {
    where: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;
}
export declare class PointTransactionAggregateArgs {
    where?: InstanceType<typeof PointTransactionWhereInput>;
    orderBy?: Array<PointTransactionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof PointTransactionCountAggregateInput>;
    _avg?: InstanceType<typeof PointTransactionAvgAggregateInput>;
    _sum?: InstanceType<typeof PointTransactionSumAggregateInput>;
    _min?: InstanceType<typeof PointTransactionMinAggregateInput>;
    _max?: InstanceType<typeof PointTransactionMaxAggregateInput>;
}
export declare class PointTransactionAvgAggregateInput {
    id?: true;
    amount?: true;
    currentBalance?: true;
}
export declare class PointTransactionAvgAggregate {
    id?: number;
    amount?: number;
    currentBalance?: number;
}
export declare class PointTransactionAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
}
export declare class PointTransactionCountAggregateInput {
    id?: true;
    amount?: true;
    pointType?: true;
    transactionType?: true;
    currentBalance?: true;
    userId?: true;
    createdAt?: true;
    _all?: true;
}
export declare class PointTransactionCountAggregate {
    id: number;
    amount: number;
    pointType: number;
    transactionType: number;
    currentBalance: number;
    userId: number;
    createdAt: number;
    _all: number;
}
export declare class PointTransactionCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    pointType?: keyof typeof SortOrder;
    transactionType?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class PointTransactionCreateManyUserInputEnvelope {
    data: Array<PointTransactionCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class PointTransactionCreateManyUserInput {
    id?: number;
    amount: number;
    pointType: keyof typeof PointType;
    transactionType: keyof typeof TransactionType;
    currentBalance?: number;
    createdAt?: Date | string;
}
export declare class PointTransactionCreateManyInput {
    id?: number;
    amount: number;
    pointType: keyof typeof PointType;
    transactionType: keyof typeof TransactionType;
    currentBalance?: number;
    userId: string;
    createdAt?: Date | string;
}
export declare class PointTransactionCreateNestedManyWithoutUserInput {
    create?: Array<PointTransactionCreateWithoutUserInput>;
    connectOrCreate?: Array<PointTransactionCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof PointTransactionCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>>;
}
export declare class PointTransactionCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;
    create: InstanceType<typeof PointTransactionCreateWithoutUserInput>;
}
export declare class PointTransactionCreateWithoutUserInput {
    amount: number;
    pointType: keyof typeof PointType;
    transactionType: keyof typeof TransactionType;
    currentBalance?: number;
    createdAt?: Date | string;
}
export declare class PointTransactionCreateInput {
    amount: number;
    pointType: keyof typeof PointType;
    transactionType: keyof typeof TransactionType;
    currentBalance?: number;
    createdAt?: Date | string;
    User: InstanceType<typeof UserCreateNestedOneWithoutPointTransactionsInput>;
}
export declare class PointTransactionGroupByArgs {
    where?: InstanceType<typeof PointTransactionWhereInput>;
    orderBy?: Array<PointTransactionOrderByWithAggregationInput>;
    by: Array<keyof typeof PointTransactionScalarFieldEnum>;
    having?: InstanceType<typeof PointTransactionScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof PointTransactionCountAggregateInput>;
    _avg?: InstanceType<typeof PointTransactionAvgAggregateInput>;
    _sum?: InstanceType<typeof PointTransactionSumAggregateInput>;
    _min?: InstanceType<typeof PointTransactionMinAggregateInput>;
    _max?: InstanceType<typeof PointTransactionMaxAggregateInput>;
}
export declare class PointTransactionGroupBy {
    id: number;
    amount: number;
    pointType: keyof typeof PointType;
    transactionType: keyof typeof TransactionType;
    currentBalance: number;
    userId: string;
    createdAt: Date | string;
    _count?: InstanceType<typeof PointTransactionCountAggregate>;
    _avg?: InstanceType<typeof PointTransactionAvgAggregate>;
    _sum?: InstanceType<typeof PointTransactionSumAggregate>;
    _min?: InstanceType<typeof PointTransactionMinAggregate>;
    _max?: InstanceType<typeof PointTransactionMaxAggregate>;
}
export declare class PointTransactionListRelationFilter {
    every?: InstanceType<typeof PointTransactionWhereInput>;
    some?: InstanceType<typeof PointTransactionWhereInput>;
    none?: InstanceType<typeof PointTransactionWhereInput>;
}
export declare class PointTransactionMaxAggregateInput {
    id?: true;
    amount?: true;
    pointType?: true;
    transactionType?: true;
    currentBalance?: true;
    userId?: true;
    createdAt?: true;
}
export declare class PointTransactionMaxAggregate {
    id?: number;
    amount?: number;
    pointType?: keyof typeof PointType;
    transactionType?: keyof typeof TransactionType;
    currentBalance?: number;
    userId?: string;
    createdAt?: Date | string;
}
export declare class PointTransactionMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    pointType?: keyof typeof SortOrder;
    transactionType?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class PointTransactionMinAggregateInput {
    id?: true;
    amount?: true;
    pointType?: true;
    transactionType?: true;
    currentBalance?: true;
    userId?: true;
    createdAt?: true;
}
export declare class PointTransactionMinAggregate {
    id?: number;
    amount?: number;
    pointType?: keyof typeof PointType;
    transactionType?: keyof typeof TransactionType;
    currentBalance?: number;
    userId?: string;
    createdAt?: Date | string;
}
export declare class PointTransactionMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    pointType?: keyof typeof SortOrder;
    transactionType?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class PointTransactionOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class PointTransactionOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    pointType?: keyof typeof SortOrder;
    transactionType?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof PointTransactionCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof PointTransactionAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof PointTransactionMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof PointTransactionMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof PointTransactionSumOrderByAggregateInput>;
}
export declare class PointTransactionOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    pointType?: keyof typeof SortOrder;
    transactionType?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    User?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class PointTransactionScalarWhereWithAggregatesInput {
    AND?: Array<PointTransactionScalarWhereWithAggregatesInput>;
    OR?: Array<PointTransactionScalarWhereWithAggregatesInput>;
    NOT?: Array<PointTransactionScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    amount?: InstanceType<typeof FloatWithAggregatesFilter>;
    pointType?: InstanceType<typeof EnumPointTypeWithAggregatesFilter>;
    transactionType?: InstanceType<typeof EnumTransactionTypeWithAggregatesFilter>;
    currentBalance?: InstanceType<typeof FloatWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class PointTransactionScalarWhereInput {
    AND?: Array<PointTransactionScalarWhereInput>;
    OR?: Array<PointTransactionScalarWhereInput>;
    NOT?: Array<PointTransactionScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    amount?: InstanceType<typeof FloatFilter>;
    pointType?: InstanceType<typeof EnumPointTypeFilter>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFilter>;
    currentBalance?: InstanceType<typeof FloatFilter>;
    userId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class PointTransactionSumAggregateInput {
    id?: true;
    amount?: true;
    currentBalance?: true;
}
export declare class PointTransactionSumAggregate {
    id?: number;
    amount?: number;
    currentBalance?: number;
}
export declare class PointTransactionSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
}
export declare class PointTransactionUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<PointTransactionCreateWithoutUserInput>;
    connectOrCreate?: Array<PointTransactionCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof PointTransactionCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>>;
}
export declare class PointTransactionUncheckedCreateWithoutUserInput {
    id?: number;
    amount: number;
    pointType: keyof typeof PointType;
    transactionType: keyof typeof TransactionType;
    currentBalance?: number;
    createdAt?: Date | string;
}
export declare class PointTransactionUncheckedCreateInput {
    id?: number;
    amount: number;
    pointType: keyof typeof PointType;
    transactionType: keyof typeof TransactionType;
    currentBalance?: number;
    userId: string;
    createdAt?: Date | string;
}
export declare class PointTransactionUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<PointTransactionCreateWithoutUserInput>;
    connectOrCreate?: Array<PointTransactionCreateOrConnectWithoutUserInput>;
    upsert?: Array<PointTransactionUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof PointTransactionCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>>;
    update?: Array<PointTransactionUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<PointTransactionUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<PointTransactionScalarWhereInput>;
}
export declare class PointTransactionUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    pointType?: InstanceType<typeof EnumPointTypeFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PointTransactionUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    pointType?: InstanceType<typeof EnumPointTypeFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PointTransactionUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    pointType?: InstanceType<typeof EnumPointTypeFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PointTransactionUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    pointType?: InstanceType<typeof EnumPointTypeFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PointTransactionUpdateManyMutationInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    pointType?: InstanceType<typeof EnumPointTypeFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PointTransactionUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof PointTransactionScalarWhereInput>;
    data: InstanceType<typeof PointTransactionUpdateManyMutationInput>;
}
export declare class PointTransactionUpdateManyWithoutUserNestedInput {
    create?: Array<PointTransactionCreateWithoutUserInput>;
    connectOrCreate?: Array<PointTransactionCreateOrConnectWithoutUserInput>;
    upsert?: Array<PointTransactionUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof PointTransactionCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>>;
    update?: Array<PointTransactionUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<PointTransactionUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<PointTransactionScalarWhereInput>;
}
export declare class PointTransactionUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;
    data: InstanceType<typeof PointTransactionUpdateWithoutUserInput>;
}
export declare class PointTransactionUpdateWithoutUserInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    pointType?: InstanceType<typeof EnumPointTypeFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PointTransactionUpdateInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    pointType?: InstanceType<typeof EnumPointTypeFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    User?: InstanceType<typeof UserUpdateOneRequiredWithoutPointTransactionsNestedInput>;
}
export declare class PointTransactionUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;
    update: InstanceType<typeof PointTransactionUpdateWithoutUserInput>;
    create: InstanceType<typeof PointTransactionCreateWithoutUserInput>;
}
export declare class PointTransactionWhereUniqueInput {
    id?: number;
    AND?: Array<PointTransactionWhereInput>;
    OR?: Array<PointTransactionWhereInput>;
    NOT?: Array<PointTransactionWhereInput>;
    amount?: InstanceType<typeof FloatFilter>;
    pointType?: InstanceType<typeof EnumPointTypeFilter>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFilter>;
    currentBalance?: InstanceType<typeof FloatFilter>;
    userId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    User?: InstanceType<typeof UserRelationFilter>;
}
export declare class PointTransactionWhereInput {
    AND?: Array<PointTransactionWhereInput>;
    OR?: Array<PointTransactionWhereInput>;
    NOT?: Array<PointTransactionWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    amount?: InstanceType<typeof FloatFilter>;
    pointType?: InstanceType<typeof EnumPointTypeFilter>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFilter>;
    currentBalance?: InstanceType<typeof FloatFilter>;
    userId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    User?: InstanceType<typeof UserRelationFilter>;
}
export declare class PointTransaction {
    id: number;
    amount: number;
    pointType: keyof typeof PointType;
    transactionType: keyof typeof TransactionType;
    currentBalance: number;
    userId: string;
    createdAt: Date;
    User?: InstanceType<typeof User>;
}
export declare class UpdateManyPointTransactionArgs {
    data: InstanceType<typeof PointTransactionUpdateManyMutationInput>;
    where?: InstanceType<typeof PointTransactionWhereInput>;
}
export declare class UpdateOnePointTransactionArgs {
    data: InstanceType<typeof PointTransactionUpdateInput>;
    where: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;
}
export declare class UpsertOnePointTransactionArgs {
    where: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;
    create: InstanceType<typeof PointTransactionCreateInput>;
    update: InstanceType<typeof PointTransactionUpdateInput>;
}
export declare class AggregatePostalCode {
    _count?: InstanceType<typeof PostalCodeCountAggregate>;
    _avg?: InstanceType<typeof PostalCodeAvgAggregate>;
    _sum?: InstanceType<typeof PostalCodeSumAggregate>;
    _min?: InstanceType<typeof PostalCodeMinAggregate>;
    _max?: InstanceType<typeof PostalCodeMaxAggregate>;
}
export declare class CreateManyPostalCodeArgs {
    data: Array<PostalCodeCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOnePostalCodeArgs {
    data: InstanceType<typeof PostalCodeCreateInput>;
}
export declare class DeleteManyPostalCodeArgs {
    where?: InstanceType<typeof PostalCodeWhereInput>;
}
export declare class DeleteOnePostalCodeArgs {
    where: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;
}
export declare class FindFirstPostalCodeOrThrowArgs {
    where?: InstanceType<typeof PostalCodeWhereInput>;
    orderBy?: Array<PostalCodeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PostalCodeScalarFieldEnum>;
}
export declare class FindFirstPostalCodeArgs {
    where?: InstanceType<typeof PostalCodeWhereInput>;
    orderBy?: Array<PostalCodeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PostalCodeScalarFieldEnum>;
}
export declare class FindManyPostalCodeArgs {
    where?: InstanceType<typeof PostalCodeWhereInput>;
    orderBy?: Array<PostalCodeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PostalCodeScalarFieldEnum>;
}
export declare class FindUniquePostalCodeOrThrowArgs {
    where: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;
}
export declare class FindUniquePostalCodeArgs {
    where: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;
}
export declare class PostalCodeAggregateArgs {
    where?: InstanceType<typeof PostalCodeWhereInput>;
    orderBy?: Array<PostalCodeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof PostalCodeCountAggregateInput>;
    _avg?: InstanceType<typeof PostalCodeAvgAggregateInput>;
    _sum?: InstanceType<typeof PostalCodeSumAggregateInput>;
    _min?: InstanceType<typeof PostalCodeMinAggregateInput>;
    _max?: InstanceType<typeof PostalCodeMaxAggregateInput>;
}
export declare class PostalCodeAvgAggregateInput {
    id?: true;
    code?: true;
}
export declare class PostalCodeAvgAggregate {
    id?: number;
    code?: number;
}
export declare class PostalCodeAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
}
export declare class PostalCodeCountAggregateInput {
    id?: true;
    code?: true;
    _all?: true;
}
export declare class PostalCodeCountAggregate {
    id: number;
    code: number;
    _all: number;
}
export declare class PostalCodeCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
}
export declare class PostalCodeCount {
    address?: number;
}
export declare class PostalCodeCreateManyInput {
    id?: number;
    code: number;
}
export declare class PostalCodeCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof PostalCodeCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof PostalCodeCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;
}
export declare class PostalCodeCreateOrConnectWithoutAddressInput {
    where: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;
    create: InstanceType<typeof PostalCodeCreateWithoutAddressInput>;
}
export declare class PostalCodeCreateWithoutAddressInput {
    code: number;
}
export declare class PostalCodeCreateInput {
    code: number;
    address?: InstanceType<typeof AddressCreateNestedManyWithoutPostalCodeInput>;
}
export declare class PostalCodeGroupByArgs {
    where?: InstanceType<typeof PostalCodeWhereInput>;
    orderBy?: Array<PostalCodeOrderByWithAggregationInput>;
    by: Array<keyof typeof PostalCodeScalarFieldEnum>;
    having?: InstanceType<typeof PostalCodeScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof PostalCodeCountAggregateInput>;
    _avg?: InstanceType<typeof PostalCodeAvgAggregateInput>;
    _sum?: InstanceType<typeof PostalCodeSumAggregateInput>;
    _min?: InstanceType<typeof PostalCodeMinAggregateInput>;
    _max?: InstanceType<typeof PostalCodeMaxAggregateInput>;
}
export declare class PostalCodeGroupBy {
    id: number;
    code: number;
    _count?: InstanceType<typeof PostalCodeCountAggregate>;
    _avg?: InstanceType<typeof PostalCodeAvgAggregate>;
    _sum?: InstanceType<typeof PostalCodeSumAggregate>;
    _min?: InstanceType<typeof PostalCodeMinAggregate>;
    _max?: InstanceType<typeof PostalCodeMaxAggregate>;
}
export declare class PostalCodeMaxAggregateInput {
    id?: true;
    code?: true;
}
export declare class PostalCodeMaxAggregate {
    id?: number;
    code?: number;
}
export declare class PostalCodeMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
}
export declare class PostalCodeMinAggregateInput {
    id?: true;
    code?: true;
}
export declare class PostalCodeMinAggregate {
    id?: number;
    code?: number;
}
export declare class PostalCodeMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
}
export declare class PostalCodeOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    _count?: InstanceType<typeof PostalCodeCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof PostalCodeAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof PostalCodeMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof PostalCodeMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof PostalCodeSumOrderByAggregateInput>;
}
export declare class PostalCodeOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    address?: InstanceType<typeof AddressOrderByRelationAggregateInput>;
}
export declare class PostalCodeRelationFilter {
    is?: InstanceType<typeof PostalCodeWhereInput>;
    isNot?: InstanceType<typeof PostalCodeWhereInput>;
}
export declare class PostalCodeScalarWhereWithAggregatesInput {
    AND?: Array<PostalCodeScalarWhereWithAggregatesInput>;
    OR?: Array<PostalCodeScalarWhereWithAggregatesInput>;
    NOT?: Array<PostalCodeScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    code?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class PostalCodeSumAggregateInput {
    id?: true;
    code?: true;
}
export declare class PostalCodeSumAggregate {
    id?: number;
    code?: number;
}
export declare class PostalCodeSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
}
export declare class PostalCodeUncheckedCreateWithoutAddressInput {
    id?: number;
    code: number;
}
export declare class PostalCodeUncheckedCreateInput {
    id?: number;
    code: number;
    address?: InstanceType<typeof AddressUncheckedCreateNestedManyWithoutPostalCodeInput>;
}
export declare class PostalCodeUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    code?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class PostalCodeUncheckedUpdateWithoutAddressInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    code?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class PostalCodeUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    code?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUncheckedUpdateManyWithoutPostalCodeNestedInput>;
}
export declare class PostalCodeUpdateManyMutationInput {
    code?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class PostalCodeUpdateOneRequiredWithoutAddressNestedInput {
    create?: InstanceType<typeof PostalCodeCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof PostalCodeCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof PostalCodeUpsertWithoutAddressInput>;
    connect?: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;
    update?: InstanceType<typeof PostalCodeUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class PostalCodeUpdateToOneWithWhereWithoutAddressInput {
    where?: InstanceType<typeof PostalCodeWhereInput>;
    data: InstanceType<typeof PostalCodeUpdateWithoutAddressInput>;
}
export declare class PostalCodeUpdateWithoutAddressInput {
    code?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class PostalCodeUpdateInput {
    code?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateManyWithoutPostalCodeNestedInput>;
}
export declare class PostalCodeUpsertWithoutAddressInput {
    update: InstanceType<typeof PostalCodeUpdateWithoutAddressInput>;
    create: InstanceType<typeof PostalCodeCreateWithoutAddressInput>;
    where?: InstanceType<typeof PostalCodeWhereInput>;
}
export declare class PostalCodeWhereUniqueInput {
    id?: number;
    code?: number;
    AND?: Array<PostalCodeWhereInput>;
    OR?: Array<PostalCodeWhereInput>;
    NOT?: Array<PostalCodeWhereInput>;
    address?: InstanceType<typeof AddressListRelationFilter>;
}
export declare class PostalCodeWhereInput {
    AND?: Array<PostalCodeWhereInput>;
    OR?: Array<PostalCodeWhereInput>;
    NOT?: Array<PostalCodeWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    code?: InstanceType<typeof IntFilter>;
    address?: InstanceType<typeof AddressListRelationFilter>;
}
export declare class PostalCode {
    id: number;
    code: number;
    address?: Array<Address>;
    _count?: InstanceType<typeof PostalCodeCount>;
}
export declare class UpdateManyPostalCodeArgs {
    data: InstanceType<typeof PostalCodeUpdateManyMutationInput>;
    where?: InstanceType<typeof PostalCodeWhereInput>;
}
export declare class UpdateOnePostalCodeArgs {
    data: InstanceType<typeof PostalCodeUpdateInput>;
    where: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;
}
export declare class UpsertOnePostalCodeArgs {
    where: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;
    create: InstanceType<typeof PostalCodeCreateInput>;
    update: InstanceType<typeof PostalCodeUpdateInput>;
}
export declare class AffectedRows {
    count: number;
}
export declare class BoolFieldUpdateOperationsInput {
    set?: boolean;
}
export declare class BoolFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolFilter>;
}
export declare class BoolWithAggregatesFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedBoolFilter>;
    _max?: InstanceType<typeof NestedBoolFilter>;
}
export declare class DateTimeFieldUpdateOperationsInput {
    set?: Date | string;
}
export declare class DateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class DateTimeNullableFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class DateTimeNullableWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class DateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class EnumAccountCategoryFieldUpdateOperationsInput {
    set?: keyof typeof AccountCategory;
}
export declare class EnumAccountCategoryFilter {
    equals?: keyof typeof AccountCategory;
    in?: Array<keyof typeof AccountCategory>;
    notIn?: Array<keyof typeof AccountCategory>;
    not?: InstanceType<typeof NestedEnumAccountCategoryFilter>;
}
export declare class EnumAccountCategoryWithAggregatesFilter {
    equals?: keyof typeof AccountCategory;
    in?: Array<keyof typeof AccountCategory>;
    notIn?: Array<keyof typeof AccountCategory>;
    not?: InstanceType<typeof NestedEnumAccountCategoryWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumAccountCategoryFilter>;
    _max?: InstanceType<typeof NestedEnumAccountCategoryFilter>;
}
export declare class EnumFileTypeFieldUpdateOperationsInput {
    set?: keyof typeof FileType;
}
export declare class EnumFileTypeFilter {
    equals?: keyof typeof FileType;
    in?: Array<keyof typeof FileType>;
    notIn?: Array<keyof typeof FileType>;
    not?: InstanceType<typeof NestedEnumFileTypeFilter>;
}
export declare class EnumFileTypeWithAggregatesFilter {
    equals?: keyof typeof FileType;
    in?: Array<keyof typeof FileType>;
    notIn?: Array<keyof typeof FileType>;
    not?: InstanceType<typeof NestedEnumFileTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumFileTypeFilter>;
    _max?: InstanceType<typeof NestedEnumFileTypeFilter>;
}
export declare class EnumPointTypeFieldUpdateOperationsInput {
    set?: keyof typeof PointType;
}
export declare class EnumPointTypeFilter {
    equals?: keyof typeof PointType;
    in?: Array<keyof typeof PointType>;
    notIn?: Array<keyof typeof PointType>;
    not?: InstanceType<typeof NestedEnumPointTypeFilter>;
}
export declare class EnumPointTypeWithAggregatesFilter {
    equals?: keyof typeof PointType;
    in?: Array<keyof typeof PointType>;
    notIn?: Array<keyof typeof PointType>;
    not?: InstanceType<typeof NestedEnumPointTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumPointTypeFilter>;
    _max?: InstanceType<typeof NestedEnumPointTypeFilter>;
}
export declare class EnumProjectCategoryFieldUpdateOperationsInput {
    set?: keyof typeof ProjectCategory;
}
export declare class EnumProjectCategoryFilter {
    equals?: keyof typeof ProjectCategory;
    in?: Array<keyof typeof ProjectCategory>;
    notIn?: Array<keyof typeof ProjectCategory>;
    not?: InstanceType<typeof NestedEnumProjectCategoryFilter>;
}
export declare class EnumProjectCategoryWithAggregatesFilter {
    equals?: keyof typeof ProjectCategory;
    in?: Array<keyof typeof ProjectCategory>;
    notIn?: Array<keyof typeof ProjectCategory>;
    not?: InstanceType<typeof NestedEnumProjectCategoryWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumProjectCategoryFilter>;
    _max?: InstanceType<typeof NestedEnumProjectCategoryFilter>;
}
export declare class EnumShippingStatusFieldUpdateOperationsInput {
    set?: keyof typeof ShippingStatus;
}
export declare class EnumShippingStatusFilter {
    equals?: keyof typeof ShippingStatus;
    in?: Array<keyof typeof ShippingStatus>;
    notIn?: Array<keyof typeof ShippingStatus>;
    not?: InstanceType<typeof NestedEnumShippingStatusFilter>;
}
export declare class EnumShippingStatusWithAggregatesFilter {
    equals?: keyof typeof ShippingStatus;
    in?: Array<keyof typeof ShippingStatus>;
    notIn?: Array<keyof typeof ShippingStatus>;
    not?: InstanceType<typeof NestedEnumShippingStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumShippingStatusFilter>;
    _max?: InstanceType<typeof NestedEnumShippingStatusFilter>;
}
export declare class EnumThemeFieldUpdateOperationsInput {
    set?: keyof typeof Theme;
}
export declare class EnumThemeFilter {
    equals?: keyof typeof Theme;
    in?: Array<keyof typeof Theme>;
    notIn?: Array<keyof typeof Theme>;
    not?: InstanceType<typeof NestedEnumThemeFilter>;
}
export declare class EnumThemeWithAggregatesFilter {
    equals?: keyof typeof Theme;
    in?: Array<keyof typeof Theme>;
    notIn?: Array<keyof typeof Theme>;
    not?: InstanceType<typeof NestedEnumThemeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumThemeFilter>;
    _max?: InstanceType<typeof NestedEnumThemeFilter>;
}
export declare class EnumTransactionCategoryFieldUpdateOperationsInput {
    set?: keyof typeof TransactionCategory;
}
export declare class EnumTransactionCategoryFilter {
    equals?: keyof typeof TransactionCategory;
    in?: Array<keyof typeof TransactionCategory>;
    notIn?: Array<keyof typeof TransactionCategory>;
    not?: InstanceType<typeof NestedEnumTransactionCategoryFilter>;
}
export declare class EnumTransactionCategoryWithAggregatesFilter {
    equals?: keyof typeof TransactionCategory;
    in?: Array<keyof typeof TransactionCategory>;
    notIn?: Array<keyof typeof TransactionCategory>;
    not?: InstanceType<typeof NestedEnumTransactionCategoryWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumTransactionCategoryFilter>;
    _max?: InstanceType<typeof NestedEnumTransactionCategoryFilter>;
}
export declare class EnumTransactionStatusFieldUpdateOperationsInput {
    set?: keyof typeof TransactionStatus;
}
export declare class EnumTransactionStatusFilter {
    equals?: keyof typeof TransactionStatus;
    in?: Array<keyof typeof TransactionStatus>;
    notIn?: Array<keyof typeof TransactionStatus>;
    not?: InstanceType<typeof NestedEnumTransactionStatusFilter>;
}
export declare class EnumTransactionStatusWithAggregatesFilter {
    equals?: keyof typeof TransactionStatus;
    in?: Array<keyof typeof TransactionStatus>;
    notIn?: Array<keyof typeof TransactionStatus>;
    not?: InstanceType<typeof NestedEnumTransactionStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumTransactionStatusFilter>;
    _max?: InstanceType<typeof NestedEnumTransactionStatusFilter>;
}
export declare class EnumTransactionTypeFieldUpdateOperationsInput {
    set?: keyof typeof TransactionType;
}
export declare class EnumTransactionTypeFilter {
    equals?: keyof typeof TransactionType;
    in?: Array<keyof typeof TransactionType>;
    notIn?: Array<keyof typeof TransactionType>;
    not?: InstanceType<typeof NestedEnumTransactionTypeFilter>;
}
export declare class EnumTransactionTypeWithAggregatesFilter {
    equals?: keyof typeof TransactionType;
    in?: Array<keyof typeof TransactionType>;
    notIn?: Array<keyof typeof TransactionType>;
    not?: InstanceType<typeof NestedEnumTransactionTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumTransactionTypeFilter>;
    _max?: InstanceType<typeof NestedEnumTransactionTypeFilter>;
}
export declare class EnumUserNotificationCategoryFieldUpdateOperationsInput {
    set?: keyof typeof UserNotificationCategory;
}
export declare class EnumUserNotificationCategoryFilter {
    equals?: keyof typeof UserNotificationCategory;
    in?: Array<keyof typeof UserNotificationCategory>;
    notIn?: Array<keyof typeof UserNotificationCategory>;
    not?: InstanceType<typeof NestedEnumUserNotificationCategoryFilter>;
}
export declare class EnumUserNotificationCategoryWithAggregatesFilter {
    equals?: keyof typeof UserNotificationCategory;
    in?: Array<keyof typeof UserNotificationCategory>;
    notIn?: Array<keyof typeof UserNotificationCategory>;
    not?: InstanceType<typeof NestedEnumUserNotificationCategoryWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserNotificationCategoryFilter>;
    _max?: InstanceType<typeof NestedEnumUserNotificationCategoryFilter>;
}
export declare class EnumUserRoleFieldUpdateOperationsInput {
    set?: keyof typeof UserRole;
}
export declare class EnumUserRoleFilter {
    equals?: keyof typeof UserRole;
    in?: Array<keyof typeof UserRole>;
    notIn?: Array<keyof typeof UserRole>;
    not?: InstanceType<typeof NestedEnumUserRoleFilter>;
}
export declare class EnumUserRoleWithAggregatesFilter {
    equals?: keyof typeof UserRole;
    in?: Array<keyof typeof UserRole>;
    notIn?: Array<keyof typeof UserRole>;
    not?: InstanceType<typeof NestedEnumUserRoleWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserRoleFilter>;
    _max?: InstanceType<typeof NestedEnumUserRoleFilter>;
}
export declare class EnumUserStatusFieldUpdateOperationsInput {
    set?: keyof typeof UserStatus;
}
export declare class EnumUserStatusFilter {
    equals?: keyof typeof UserStatus;
    in?: Array<keyof typeof UserStatus>;
    notIn?: Array<keyof typeof UserStatus>;
    not?: InstanceType<typeof NestedEnumUserStatusFilter>;
}
export declare class EnumUserStatusWithAggregatesFilter {
    equals?: keyof typeof UserStatus;
    in?: Array<keyof typeof UserStatus>;
    notIn?: Array<keyof typeof UserStatus>;
    not?: InstanceType<typeof NestedEnumUserStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserStatusFilter>;
    _max?: InstanceType<typeof NestedEnumUserStatusFilter>;
}
export declare class EnumUserTypeFieldUpdateOperationsInput {
    set?: keyof typeof UserType;
}
export declare class EnumUserTypeFilter {
    equals?: keyof typeof UserType;
    in?: Array<keyof typeof UserType>;
    notIn?: Array<keyof typeof UserType>;
    not?: InstanceType<typeof NestedEnumUserTypeFilter>;
}
export declare class EnumUserTypeWithAggregatesFilter {
    equals?: keyof typeof UserType;
    in?: Array<keyof typeof UserType>;
    notIn?: Array<keyof typeof UserType>;
    not?: InstanceType<typeof NestedEnumUserTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserTypeFilter>;
    _max?: InstanceType<typeof NestedEnumUserTypeFilter>;
}
export declare class FloatFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class FloatFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatFilter>;
}
export declare class FloatWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedFloatFilter>;
    _min?: InstanceType<typeof NestedFloatFilter>;
    _max?: InstanceType<typeof NestedFloatFilter>;
}
export declare class IntFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class IntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class IntNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class IntNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class IntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedIntFilter>;
    _max?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedBoolFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolFilter>;
}
export declare class NestedBoolWithAggregatesFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedBoolFilter>;
    _max?: InstanceType<typeof NestedBoolFilter>;
}
export declare class NestedDateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedDateTimeNullableFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class NestedDateTimeNullableWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class NestedDateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedEnumAccountCategoryFilter {
    equals?: keyof typeof AccountCategory;
    in?: Array<keyof typeof AccountCategory>;
    notIn?: Array<keyof typeof AccountCategory>;
    not?: InstanceType<typeof NestedEnumAccountCategoryFilter>;
}
export declare class NestedEnumAccountCategoryWithAggregatesFilter {
    equals?: keyof typeof AccountCategory;
    in?: Array<keyof typeof AccountCategory>;
    notIn?: Array<keyof typeof AccountCategory>;
    not?: InstanceType<typeof NestedEnumAccountCategoryWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumAccountCategoryFilter>;
    _max?: InstanceType<typeof NestedEnumAccountCategoryFilter>;
}
export declare class NestedEnumFileTypeFilter {
    equals?: keyof typeof FileType;
    in?: Array<keyof typeof FileType>;
    notIn?: Array<keyof typeof FileType>;
    not?: InstanceType<typeof NestedEnumFileTypeFilter>;
}
export declare class NestedEnumFileTypeWithAggregatesFilter {
    equals?: keyof typeof FileType;
    in?: Array<keyof typeof FileType>;
    notIn?: Array<keyof typeof FileType>;
    not?: InstanceType<typeof NestedEnumFileTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumFileTypeFilter>;
    _max?: InstanceType<typeof NestedEnumFileTypeFilter>;
}
export declare class NestedEnumPointTypeFilter {
    equals?: keyof typeof PointType;
    in?: Array<keyof typeof PointType>;
    notIn?: Array<keyof typeof PointType>;
    not?: InstanceType<typeof NestedEnumPointTypeFilter>;
}
export declare class NestedEnumPointTypeWithAggregatesFilter {
    equals?: keyof typeof PointType;
    in?: Array<keyof typeof PointType>;
    notIn?: Array<keyof typeof PointType>;
    not?: InstanceType<typeof NestedEnumPointTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumPointTypeFilter>;
    _max?: InstanceType<typeof NestedEnumPointTypeFilter>;
}
export declare class NestedEnumProjectCategoryFilter {
    equals?: keyof typeof ProjectCategory;
    in?: Array<keyof typeof ProjectCategory>;
    notIn?: Array<keyof typeof ProjectCategory>;
    not?: InstanceType<typeof NestedEnumProjectCategoryFilter>;
}
export declare class NestedEnumProjectCategoryWithAggregatesFilter {
    equals?: keyof typeof ProjectCategory;
    in?: Array<keyof typeof ProjectCategory>;
    notIn?: Array<keyof typeof ProjectCategory>;
    not?: InstanceType<typeof NestedEnumProjectCategoryWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumProjectCategoryFilter>;
    _max?: InstanceType<typeof NestedEnumProjectCategoryFilter>;
}
export declare class NestedEnumShippingStatusFilter {
    equals?: keyof typeof ShippingStatus;
    in?: Array<keyof typeof ShippingStatus>;
    notIn?: Array<keyof typeof ShippingStatus>;
    not?: InstanceType<typeof NestedEnumShippingStatusFilter>;
}
export declare class NestedEnumShippingStatusWithAggregatesFilter {
    equals?: keyof typeof ShippingStatus;
    in?: Array<keyof typeof ShippingStatus>;
    notIn?: Array<keyof typeof ShippingStatus>;
    not?: InstanceType<typeof NestedEnumShippingStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumShippingStatusFilter>;
    _max?: InstanceType<typeof NestedEnumShippingStatusFilter>;
}
export declare class NestedEnumThemeFilter {
    equals?: keyof typeof Theme;
    in?: Array<keyof typeof Theme>;
    notIn?: Array<keyof typeof Theme>;
    not?: InstanceType<typeof NestedEnumThemeFilter>;
}
export declare class NestedEnumThemeWithAggregatesFilter {
    equals?: keyof typeof Theme;
    in?: Array<keyof typeof Theme>;
    notIn?: Array<keyof typeof Theme>;
    not?: InstanceType<typeof NestedEnumThemeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumThemeFilter>;
    _max?: InstanceType<typeof NestedEnumThemeFilter>;
}
export declare class NestedEnumTransactionCategoryFilter {
    equals?: keyof typeof TransactionCategory;
    in?: Array<keyof typeof TransactionCategory>;
    notIn?: Array<keyof typeof TransactionCategory>;
    not?: InstanceType<typeof NestedEnumTransactionCategoryFilter>;
}
export declare class NestedEnumTransactionCategoryWithAggregatesFilter {
    equals?: keyof typeof TransactionCategory;
    in?: Array<keyof typeof TransactionCategory>;
    notIn?: Array<keyof typeof TransactionCategory>;
    not?: InstanceType<typeof NestedEnumTransactionCategoryWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumTransactionCategoryFilter>;
    _max?: InstanceType<typeof NestedEnumTransactionCategoryFilter>;
}
export declare class NestedEnumTransactionStatusFilter {
    equals?: keyof typeof TransactionStatus;
    in?: Array<keyof typeof TransactionStatus>;
    notIn?: Array<keyof typeof TransactionStatus>;
    not?: InstanceType<typeof NestedEnumTransactionStatusFilter>;
}
export declare class NestedEnumTransactionStatusWithAggregatesFilter {
    equals?: keyof typeof TransactionStatus;
    in?: Array<keyof typeof TransactionStatus>;
    notIn?: Array<keyof typeof TransactionStatus>;
    not?: InstanceType<typeof NestedEnumTransactionStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumTransactionStatusFilter>;
    _max?: InstanceType<typeof NestedEnumTransactionStatusFilter>;
}
export declare class NestedEnumTransactionTypeFilter {
    equals?: keyof typeof TransactionType;
    in?: Array<keyof typeof TransactionType>;
    notIn?: Array<keyof typeof TransactionType>;
    not?: InstanceType<typeof NestedEnumTransactionTypeFilter>;
}
export declare class NestedEnumTransactionTypeWithAggregatesFilter {
    equals?: keyof typeof TransactionType;
    in?: Array<keyof typeof TransactionType>;
    notIn?: Array<keyof typeof TransactionType>;
    not?: InstanceType<typeof NestedEnumTransactionTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumTransactionTypeFilter>;
    _max?: InstanceType<typeof NestedEnumTransactionTypeFilter>;
}
export declare class NestedEnumUserNotificationCategoryFilter {
    equals?: keyof typeof UserNotificationCategory;
    in?: Array<keyof typeof UserNotificationCategory>;
    notIn?: Array<keyof typeof UserNotificationCategory>;
    not?: InstanceType<typeof NestedEnumUserNotificationCategoryFilter>;
}
export declare class NestedEnumUserNotificationCategoryWithAggregatesFilter {
    equals?: keyof typeof UserNotificationCategory;
    in?: Array<keyof typeof UserNotificationCategory>;
    notIn?: Array<keyof typeof UserNotificationCategory>;
    not?: InstanceType<typeof NestedEnumUserNotificationCategoryWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserNotificationCategoryFilter>;
    _max?: InstanceType<typeof NestedEnumUserNotificationCategoryFilter>;
}
export declare class NestedEnumUserRoleFilter {
    equals?: keyof typeof UserRole;
    in?: Array<keyof typeof UserRole>;
    notIn?: Array<keyof typeof UserRole>;
    not?: InstanceType<typeof NestedEnumUserRoleFilter>;
}
export declare class NestedEnumUserRoleWithAggregatesFilter {
    equals?: keyof typeof UserRole;
    in?: Array<keyof typeof UserRole>;
    notIn?: Array<keyof typeof UserRole>;
    not?: InstanceType<typeof NestedEnumUserRoleWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserRoleFilter>;
    _max?: InstanceType<typeof NestedEnumUserRoleFilter>;
}
export declare class NestedEnumUserStatusFilter {
    equals?: keyof typeof UserStatus;
    in?: Array<keyof typeof UserStatus>;
    notIn?: Array<keyof typeof UserStatus>;
    not?: InstanceType<typeof NestedEnumUserStatusFilter>;
}
export declare class NestedEnumUserStatusWithAggregatesFilter {
    equals?: keyof typeof UserStatus;
    in?: Array<keyof typeof UserStatus>;
    notIn?: Array<keyof typeof UserStatus>;
    not?: InstanceType<typeof NestedEnumUserStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserStatusFilter>;
    _max?: InstanceType<typeof NestedEnumUserStatusFilter>;
}
export declare class NestedEnumUserTypeFilter {
    equals?: keyof typeof UserType;
    in?: Array<keyof typeof UserType>;
    notIn?: Array<keyof typeof UserType>;
    not?: InstanceType<typeof NestedEnumUserTypeFilter>;
}
export declare class NestedEnumUserTypeWithAggregatesFilter {
    equals?: keyof typeof UserType;
    in?: Array<keyof typeof UserType>;
    notIn?: Array<keyof typeof UserType>;
    not?: InstanceType<typeof NestedEnumUserTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserTypeFilter>;
    _max?: InstanceType<typeof NestedEnumUserTypeFilter>;
}
export declare class NestedFloatFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatFilter>;
}
export declare class NestedFloatNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}
export declare class NestedFloatWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedFloatFilter>;
    _min?: InstanceType<typeof NestedFloatFilter>;
    _max?: InstanceType<typeof NestedFloatFilter>;
}
export declare class NestedIntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedIntNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class NestedIntNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class NestedIntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedIntFilter>;
    _max?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedStringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class NestedStringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class NullableDateTimeFieldUpdateOperationsInput {
    set?: Date | string;
}
export declare class NullableIntFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class NullableStringFieldUpdateOperationsInput {
    set?: string;
}
export declare class SortOrderInput {
    sort: keyof typeof SortOrder;
    nulls?: keyof typeof NullsOrder;
}
export declare class StringFieldUpdateOperationsInput {
    set?: string;
}
export declare class StringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class StringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class AggregateProgram {
    _count?: InstanceType<typeof ProgramCountAggregate>;
    _avg?: InstanceType<typeof ProgramAvgAggregate>;
    _sum?: InstanceType<typeof ProgramSumAggregate>;
    _min?: InstanceType<typeof ProgramMinAggregate>;
    _max?: InstanceType<typeof ProgramMaxAggregate>;
}
export declare class CreateManyProgramArgs {
    data: Array<ProgramCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneProgramArgs {
    data: InstanceType<typeof ProgramCreateInput>;
}
export declare class DeleteManyProgramArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
}
export declare class DeleteOneProgramArgs {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
}
export declare class FindFirstProgramOrThrowArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
    orderBy?: Array<ProgramOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramScalarFieldEnum>;
}
export declare class FindFirstProgramArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
    orderBy?: Array<ProgramOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramScalarFieldEnum>;
}
export declare class FindManyProgramArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
    orderBy?: Array<ProgramOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramScalarFieldEnum>;
}
export declare class FindUniqueProgramOrThrowArgs {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
}
export declare class FindUniqueProgramArgs {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
}
export declare class ProgramAggregateArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
    orderBy?: Array<ProgramOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProgramCountAggregateInput>;
    _avg?: InstanceType<typeof ProgramAvgAggregateInput>;
    _sum?: InstanceType<typeof ProgramSumAggregateInput>;
    _min?: InstanceType<typeof ProgramMinAggregateInput>;
    _max?: InstanceType<typeof ProgramMaxAggregateInput>;
}
export declare class ProgramAvgAggregateInput {
    id?: true;
    categoryId?: true;
}
export declare class ProgramAvgAggregate {
    id?: number;
    categoryId?: number;
}
export declare class ProgramAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
}
export declare class ProgramCountAggregateInput {
    id?: true;
    name?: true;
    startDate?: true;
    dueDate?: true;
    description?: true;
    createdById?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class ProgramCountAggregate {
    id: number;
    name: number;
    startDate: number;
    dueDate: number;
    description: number;
    createdById: number;
    categoryId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class ProgramCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProgramCount {
    Images?: number;
    participant?: number;
}
export declare class ProgramCreateManyCategoryInputEnvelope {
    data: Array<ProgramCreateManyCategoryInput>;
    skipDuplicates?: boolean;
}
export declare class ProgramCreateManyCategoryInput {
    id?: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramCreateManyCreatedByInputEnvelope {
    data: Array<ProgramCreateManyCreatedByInput>;
    skipDuplicates?: boolean;
}
export declare class ProgramCreateManyCreatedByInput {
    id?: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    categoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramCreateManyInput {
    id?: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdById: string;
    categoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramCreateNestedManyWithoutCategoryInput {
    create?: Array<ProgramCreateWithoutCategoryInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCategoryInput>;
    createMany?: InstanceType<typeof ProgramCreateManyCategoryInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
}
export declare class ProgramCreateNestedManyWithoutCreatedByInput {
    create?: Array<ProgramCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCreatedByInput>;
    createMany?: InstanceType<typeof ProgramCreateManyCreatedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
}
export declare class ProgramCreateNestedManyWithoutParticipantInput {
    create?: Array<ProgramCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutParticipantInput>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
}
export declare class ProgramCreateNestedOneWithoutImagesInput {
    create?: InstanceType<typeof ProgramCreateWithoutImagesInput>;
    connectOrCreate?: InstanceType<typeof ProgramCreateOrConnectWithoutImagesInput>;
    connect?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
}
export declare class ProgramCreateOrConnectWithoutCategoryInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
    create: InstanceType<typeof ProgramCreateWithoutCategoryInput>;
}
export declare class ProgramCreateOrConnectWithoutCreatedByInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
    create: InstanceType<typeof ProgramCreateWithoutCreatedByInput>;
}
export declare class ProgramCreateOrConnectWithoutImagesInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
    create: InstanceType<typeof ProgramCreateWithoutImagesInput>;
}
export declare class ProgramCreateOrConnectWithoutParticipantInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
    create: InstanceType<typeof ProgramCreateWithoutParticipantInput>;
}
export declare class ProgramCreateWithoutCategoryInput {
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Images?: InstanceType<typeof ImagesCreateNestedManyWithoutProgramImageInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutProgramsCreatedInput>;
    participant?: InstanceType<typeof UserCreateNestedManyWithoutProgramsParticipationInput>;
}
export declare class ProgramCreateWithoutCreatedByInput {
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Images?: InstanceType<typeof ImagesCreateNestedManyWithoutProgramImageInput>;
    participant?: InstanceType<typeof UserCreateNestedManyWithoutProgramsParticipationInput>;
    category: InstanceType<typeof ProgramCategoryCreateNestedOneWithoutProgramsInput>;
}
export declare class ProgramCreateWithoutImagesInput {
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutProgramsCreatedInput>;
    participant?: InstanceType<typeof UserCreateNestedManyWithoutProgramsParticipationInput>;
    category: InstanceType<typeof ProgramCategoryCreateNestedOneWithoutProgramsInput>;
}
export declare class ProgramCreateWithoutParticipantInput {
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Images?: InstanceType<typeof ImagesCreateNestedManyWithoutProgramImageInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutProgramsCreatedInput>;
    category: InstanceType<typeof ProgramCategoryCreateNestedOneWithoutProgramsInput>;
}
export declare class ProgramCreateInput {
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Images?: InstanceType<typeof ImagesCreateNestedManyWithoutProgramImageInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutProgramsCreatedInput>;
    participant?: InstanceType<typeof UserCreateNestedManyWithoutProgramsParticipationInput>;
    category: InstanceType<typeof ProgramCategoryCreateNestedOneWithoutProgramsInput>;
}
export declare class ProgramGroupByArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
    orderBy?: Array<ProgramOrderByWithAggregationInput>;
    by: Array<keyof typeof ProgramScalarFieldEnum>;
    having?: InstanceType<typeof ProgramScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProgramCountAggregateInput>;
    _avg?: InstanceType<typeof ProgramAvgAggregateInput>;
    _sum?: InstanceType<typeof ProgramSumAggregateInput>;
    _min?: InstanceType<typeof ProgramMinAggregateInput>;
    _max?: InstanceType<typeof ProgramMaxAggregateInput>;
}
export declare class ProgramGroupBy {
    id: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdById: string;
    categoryId: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof ProgramCountAggregate>;
    _avg?: InstanceType<typeof ProgramAvgAggregate>;
    _sum?: InstanceType<typeof ProgramSumAggregate>;
    _min?: InstanceType<typeof ProgramMinAggregate>;
    _max?: InstanceType<typeof ProgramMaxAggregate>;
}
export declare class ProgramListRelationFilter {
    every?: InstanceType<typeof ProgramWhereInput>;
    some?: InstanceType<typeof ProgramWhereInput>;
    none?: InstanceType<typeof ProgramWhereInput>;
}
export declare class ProgramMaxAggregateInput {
    id?: true;
    name?: true;
    startDate?: true;
    dueDate?: true;
    description?: true;
    createdById?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProgramMaxAggregate {
    id?: number;
    name?: string;
    startDate?: Date | string;
    dueDate?: Date | string;
    description?: string;
    createdById?: string;
    categoryId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProgramMinAggregateInput {
    id?: true;
    name?: true;
    startDate?: true;
    dueDate?: true;
    description?: true;
    createdById?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProgramMinAggregate {
    id?: number;
    name?: string;
    startDate?: Date | string;
    dueDate?: Date | string;
    description?: string;
    createdById?: string;
    categoryId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProgramNullableRelationFilter {
    is?: InstanceType<typeof ProgramWhereInput>;
    isNot?: InstanceType<typeof ProgramWhereInput>;
}
export declare class ProgramOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ProgramOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    dueDate?: InstanceType<typeof SortOrderInput>;
    description?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ProgramCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ProgramAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ProgramMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ProgramMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ProgramSumOrderByAggregateInput>;
}
export declare class ProgramOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    dueDate?: InstanceType<typeof SortOrderInput>;
    description?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    Images?: InstanceType<typeof ImagesOrderByRelationAggregateInput>;
    createdBy?: InstanceType<typeof UserOrderByWithRelationInput>;
    participant?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    category?: InstanceType<typeof ProgramCategoryOrderByWithRelationInput>;
}
export declare class ProgramScalarWhereWithAggregatesInput {
    AND?: Array<ProgramScalarWhereWithAggregatesInput>;
    OR?: Array<ProgramScalarWhereWithAggregatesInput>;
    NOT?: Array<ProgramScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    startDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    dueDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    createdById?: InstanceType<typeof StringWithAggregatesFilter>;
    categoryId?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class ProgramScalarWhereInput {
    AND?: Array<ProgramScalarWhereInput>;
    OR?: Array<ProgramScalarWhereInput>;
    NOT?: Array<ProgramScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    dueDate?: InstanceType<typeof DateTimeNullableFilter>;
    description?: InstanceType<typeof StringFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    categoryId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class ProgramSumAggregateInput {
    id?: true;
    categoryId?: true;
}
export declare class ProgramSumAggregate {
    id?: number;
    categoryId?: number;
}
export declare class ProgramSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
}
export declare class ProgramUncheckedCreateNestedManyWithoutCategoryInput {
    create?: Array<ProgramCreateWithoutCategoryInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCategoryInput>;
    createMany?: InstanceType<typeof ProgramCreateManyCategoryInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
}
export declare class ProgramUncheckedCreateNestedManyWithoutCreatedByInput {
    create?: Array<ProgramCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCreatedByInput>;
    createMany?: InstanceType<typeof ProgramCreateManyCreatedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
}
export declare class ProgramUncheckedCreateNestedManyWithoutParticipantInput {
    create?: Array<ProgramCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutParticipantInput>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
}
export declare class ProgramUncheckedCreateWithoutCategoryInput {
    id?: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutProgramImageInput>;
    participant?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutProgramsParticipationInput>;
}
export declare class ProgramUncheckedCreateWithoutCreatedByInput {
    id?: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    categoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutProgramImageInput>;
    participant?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutProgramsParticipationInput>;
}
export declare class ProgramUncheckedCreateWithoutImagesInput {
    id?: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdById: string;
    categoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    participant?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutProgramsParticipationInput>;
}
export declare class ProgramUncheckedCreateWithoutParticipantInput {
    id?: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdById: string;
    categoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutProgramImageInput>;
}
export declare class ProgramUncheckedCreateInput {
    id?: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdById: string;
    categoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutProgramImageInput>;
    participant?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutProgramsParticipationInput>;
}
export declare class ProgramUncheckedUpdateManyWithoutCategoryNestedInput {
    create?: Array<ProgramCreateWithoutCategoryInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCategoryInput>;
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutCategoryInput>;
    createMany?: InstanceType<typeof ProgramCreateManyCategoryInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    delete?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    update?: Array<ProgramUpdateWithWhereUniqueWithoutCategoryInput>;
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutCategoryInput>;
    deleteMany?: Array<ProgramScalarWhereInput>;
}
export declare class ProgramUncheckedUpdateManyWithoutCategoryInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramUncheckedUpdateManyWithoutCreatedByNestedInput {
    create?: Array<ProgramCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: InstanceType<typeof ProgramCreateManyCreatedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    delete?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    update?: Array<ProgramUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<ProgramScalarWhereInput>;
}
export declare class ProgramUncheckedUpdateManyWithoutCreatedByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramUncheckedUpdateManyWithoutParticipantNestedInput {
    create?: Array<ProgramCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutParticipantInput>;
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutParticipantInput>;
    set?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    delete?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    update?: Array<ProgramUpdateWithWhereUniqueWithoutParticipantInput>;
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutParticipantInput>;
    deleteMany?: Array<ProgramScalarWhereInput>;
}
export declare class ProgramUncheckedUpdateManyWithoutParticipantInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramUncheckedUpdateWithoutCategoryInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutProgramImageNestedInput>;
    participant?: InstanceType<typeof UserUncheckedUpdateManyWithoutProgramsParticipationNestedInput>;
}
export declare class ProgramUncheckedUpdateWithoutCreatedByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutProgramImageNestedInput>;
    participant?: InstanceType<typeof UserUncheckedUpdateManyWithoutProgramsParticipationNestedInput>;
}
export declare class ProgramUncheckedUpdateWithoutImagesInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof UserUncheckedUpdateManyWithoutProgramsParticipationNestedInput>;
}
export declare class ProgramUncheckedUpdateWithoutParticipantInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutProgramImageNestedInput>;
}
export declare class ProgramUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutProgramImageNestedInput>;
    participant?: InstanceType<typeof UserUncheckedUpdateManyWithoutProgramsParticipationNestedInput>;
}
export declare class ProgramUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramUpdateManyWithWhereWithoutCategoryInput {
    where: InstanceType<typeof ProgramScalarWhereInput>;
    data: InstanceType<typeof ProgramUpdateManyMutationInput>;
}
export declare class ProgramUpdateManyWithWhereWithoutCreatedByInput {
    where: InstanceType<typeof ProgramScalarWhereInput>;
    data: InstanceType<typeof ProgramUpdateManyMutationInput>;
}
export declare class ProgramUpdateManyWithWhereWithoutParticipantInput {
    where: InstanceType<typeof ProgramScalarWhereInput>;
    data: InstanceType<typeof ProgramUpdateManyMutationInput>;
}
export declare class ProgramUpdateManyWithoutCategoryNestedInput {
    create?: Array<ProgramCreateWithoutCategoryInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCategoryInput>;
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutCategoryInput>;
    createMany?: InstanceType<typeof ProgramCreateManyCategoryInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    delete?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    update?: Array<ProgramUpdateWithWhereUniqueWithoutCategoryInput>;
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutCategoryInput>;
    deleteMany?: Array<ProgramScalarWhereInput>;
}
export declare class ProgramUpdateManyWithoutCreatedByNestedInput {
    create?: Array<ProgramCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: InstanceType<typeof ProgramCreateManyCreatedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    delete?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    update?: Array<ProgramUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<ProgramScalarWhereInput>;
}
export declare class ProgramUpdateManyWithoutParticipantNestedInput {
    create?: Array<ProgramCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutParticipantInput>;
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutParticipantInput>;
    set?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    delete?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
    update?: Array<ProgramUpdateWithWhereUniqueWithoutParticipantInput>;
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutParticipantInput>;
    deleteMany?: Array<ProgramScalarWhereInput>;
}
export declare class ProgramUpdateOneWithoutImagesNestedInput {
    create?: InstanceType<typeof ProgramCreateWithoutImagesInput>;
    connectOrCreate?: InstanceType<typeof ProgramCreateOrConnectWithoutImagesInput>;
    upsert?: InstanceType<typeof ProgramUpsertWithoutImagesInput>;
    disconnect?: InstanceType<typeof ProgramWhereInput>;
    delete?: InstanceType<typeof ProgramWhereInput>;
    connect?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
    update?: InstanceType<typeof ProgramUpdateToOneWithWhereWithoutImagesInput>;
}
export declare class ProgramUpdateToOneWithWhereWithoutImagesInput {
    where?: InstanceType<typeof ProgramWhereInput>;
    data: InstanceType<typeof ProgramUpdateWithoutImagesInput>;
}
export declare class ProgramUpdateWithWhereUniqueWithoutCategoryInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
    data: InstanceType<typeof ProgramUpdateWithoutCategoryInput>;
}
export declare class ProgramUpdateWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
    data: InstanceType<typeof ProgramUpdateWithoutCreatedByInput>;
}
export declare class ProgramUpdateWithWhereUniqueWithoutParticipantInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
    data: InstanceType<typeof ProgramUpdateWithoutParticipantInput>;
}
export declare class ProgramUpdateWithoutCategoryInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Images?: InstanceType<typeof ImagesUpdateManyWithoutProgramImageNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutProgramsCreatedNestedInput>;
    participant?: InstanceType<typeof UserUpdateManyWithoutProgramsParticipationNestedInput>;
}
export declare class ProgramUpdateWithoutCreatedByInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Images?: InstanceType<typeof ImagesUpdateManyWithoutProgramImageNestedInput>;
    participant?: InstanceType<typeof UserUpdateManyWithoutProgramsParticipationNestedInput>;
    category?: InstanceType<typeof ProgramCategoryUpdateOneRequiredWithoutProgramsNestedInput>;
}
export declare class ProgramUpdateWithoutImagesInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutProgramsCreatedNestedInput>;
    participant?: InstanceType<typeof UserUpdateManyWithoutProgramsParticipationNestedInput>;
    category?: InstanceType<typeof ProgramCategoryUpdateOneRequiredWithoutProgramsNestedInput>;
}
export declare class ProgramUpdateWithoutParticipantInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Images?: InstanceType<typeof ImagesUpdateManyWithoutProgramImageNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutProgramsCreatedNestedInput>;
    category?: InstanceType<typeof ProgramCategoryUpdateOneRequiredWithoutProgramsNestedInput>;
}
export declare class ProgramUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Images?: InstanceType<typeof ImagesUpdateManyWithoutProgramImageNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutProgramsCreatedNestedInput>;
    participant?: InstanceType<typeof UserUpdateManyWithoutProgramsParticipationNestedInput>;
    category?: InstanceType<typeof ProgramCategoryUpdateOneRequiredWithoutProgramsNestedInput>;
}
export declare class ProgramUpsertWithWhereUniqueWithoutCategoryInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
    update: InstanceType<typeof ProgramUpdateWithoutCategoryInput>;
    create: InstanceType<typeof ProgramCreateWithoutCategoryInput>;
}
export declare class ProgramUpsertWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
    update: InstanceType<typeof ProgramUpdateWithoutCreatedByInput>;
    create: InstanceType<typeof ProgramCreateWithoutCreatedByInput>;
}
export declare class ProgramUpsertWithWhereUniqueWithoutParticipantInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
    update: InstanceType<typeof ProgramUpdateWithoutParticipantInput>;
    create: InstanceType<typeof ProgramCreateWithoutParticipantInput>;
}
export declare class ProgramUpsertWithoutImagesInput {
    update: InstanceType<typeof ProgramUpdateWithoutImagesInput>;
    create: InstanceType<typeof ProgramCreateWithoutImagesInput>;
    where?: InstanceType<typeof ProgramWhereInput>;
}
export declare class ProgramWhereUniqueInput {
    id?: number;
    createdById?: string;
    AND?: Array<ProgramWhereInput>;
    OR?: Array<ProgramWhereInput>;
    NOT?: Array<ProgramWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    dueDate?: InstanceType<typeof DateTimeNullableFilter>;
    description?: InstanceType<typeof StringFilter>;
    categoryId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    Images?: InstanceType<typeof ImagesListRelationFilter>;
    createdBy?: InstanceType<typeof UserRelationFilter>;
    participant?: InstanceType<typeof UserListRelationFilter>;
    category?: InstanceType<typeof ProgramCategoryRelationFilter>;
}
export declare class ProgramWhereInput {
    AND?: Array<ProgramWhereInput>;
    OR?: Array<ProgramWhereInput>;
    NOT?: Array<ProgramWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    dueDate?: InstanceType<typeof DateTimeNullableFilter>;
    description?: InstanceType<typeof StringFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    categoryId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    Images?: InstanceType<typeof ImagesListRelationFilter>;
    createdBy?: InstanceType<typeof UserRelationFilter>;
    participant?: InstanceType<typeof UserListRelationFilter>;
    category?: InstanceType<typeof ProgramCategoryRelationFilter>;
}
export declare class Program {
    id: number;
    name: string;
    startDate: Date;
    dueDate: Date | null;
    description: string;
    createdById: string;
    categoryId: number;
    createdAt: Date;
    updatedAt: Date;
    Images?: Array<Images>;
    createdBy?: InstanceType<typeof User>;
    participant?: Array<User>;
    category?: InstanceType<typeof ProgramCategory>;
    _count?: InstanceType<typeof ProgramCount>;
}
export declare class UpdateManyProgramArgs {
    data: InstanceType<typeof ProgramUpdateManyMutationInput>;
    where?: InstanceType<typeof ProgramWhereInput>;
}
export declare class UpdateOneProgramArgs {
    data: InstanceType<typeof ProgramUpdateInput>;
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
}
export declare class UpsertOneProgramArgs {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
    create: InstanceType<typeof ProgramCreateInput>;
    update: InstanceType<typeof ProgramUpdateInput>;
}
export declare class AggregateProgramCategory {
    _count?: InstanceType<typeof ProgramCategoryCountAggregate>;
    _avg?: InstanceType<typeof ProgramCategoryAvgAggregate>;
    _sum?: InstanceType<typeof ProgramCategorySumAggregate>;
    _min?: InstanceType<typeof ProgramCategoryMinAggregate>;
    _max?: InstanceType<typeof ProgramCategoryMaxAggregate>;
}
export declare class CreateManyProgramCategoryArgs {
    data: Array<ProgramCategoryCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneProgramCategoryArgs {
    data: InstanceType<typeof ProgramCategoryCreateInput>;
}
export declare class DeleteManyProgramCategoryArgs {
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
}
export declare class DeleteOneProgramCategoryArgs {
    where: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
}
export declare class FindFirstProgramCategoryOrThrowArgs {
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
    orderBy?: Array<ProgramCategoryOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramCategoryScalarFieldEnum>;
}
export declare class FindFirstProgramCategoryArgs {
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
    orderBy?: Array<ProgramCategoryOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramCategoryScalarFieldEnum>;
}
export declare class FindManyProgramCategoryArgs {
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
    orderBy?: Array<ProgramCategoryOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramCategoryScalarFieldEnum>;
}
export declare class FindUniqueProgramCategoryOrThrowArgs {
    where: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
}
export declare class FindUniqueProgramCategoryArgs {
    where: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
}
export declare class ProgramCategoryAggregateArgs {
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
    orderBy?: Array<ProgramCategoryOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProgramCategoryCountAggregateInput>;
    _avg?: InstanceType<typeof ProgramCategoryAvgAggregateInput>;
    _sum?: InstanceType<typeof ProgramCategorySumAggregateInput>;
    _min?: InstanceType<typeof ProgramCategoryMinAggregateInput>;
    _max?: InstanceType<typeof ProgramCategoryMaxAggregateInput>;
}
export declare class ProgramCategoryAvgAggregateInput {
    id?: true;
}
export declare class ProgramCategoryAvgAggregate {
    id?: number;
}
export declare class ProgramCategoryAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class ProgramCategoryCountAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class ProgramCategoryCountAggregate {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class ProgramCategoryCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProgramCategoryCount {
    programs?: number;
}
export declare class ProgramCategoryCreateManyInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramCategoryCreateNestedOneWithoutProgramsInput {
    create?: InstanceType<typeof ProgramCategoryCreateWithoutProgramsInput>;
    connectOrCreate?: InstanceType<typeof ProgramCategoryCreateOrConnectWithoutProgramsInput>;
    connect?: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
}
export declare class ProgramCategoryCreateOrConnectWithoutProgramsInput {
    where: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramCategoryCreateWithoutProgramsInput>;
}
export declare class ProgramCategoryCreateWithoutProgramsInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramCategoryCreateInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    programs?: InstanceType<typeof ProgramCreateNestedManyWithoutCategoryInput>;
}
export declare class ProgramCategoryGroupByArgs {
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
    orderBy?: Array<ProgramCategoryOrderByWithAggregationInput>;
    by: Array<keyof typeof ProgramCategoryScalarFieldEnum>;
    having?: InstanceType<typeof ProgramCategoryScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProgramCategoryCountAggregateInput>;
    _avg?: InstanceType<typeof ProgramCategoryAvgAggregateInput>;
    _sum?: InstanceType<typeof ProgramCategorySumAggregateInput>;
    _min?: InstanceType<typeof ProgramCategoryMinAggregateInput>;
    _max?: InstanceType<typeof ProgramCategoryMaxAggregateInput>;
}
export declare class ProgramCategoryGroupBy {
    id: number;
    name: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof ProgramCategoryCountAggregate>;
    _avg?: InstanceType<typeof ProgramCategoryAvgAggregate>;
    _sum?: InstanceType<typeof ProgramCategorySumAggregate>;
    _min?: InstanceType<typeof ProgramCategoryMinAggregate>;
    _max?: InstanceType<typeof ProgramCategoryMaxAggregate>;
}
export declare class ProgramCategoryMaxAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProgramCategoryMaxAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramCategoryMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProgramCategoryMinAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProgramCategoryMinAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramCategoryMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProgramCategoryOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ProgramCategoryCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ProgramCategoryAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ProgramCategoryMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ProgramCategoryMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ProgramCategorySumOrderByAggregateInput>;
}
export declare class ProgramCategoryOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    programs?: InstanceType<typeof ProgramOrderByRelationAggregateInput>;
}
export declare class ProgramCategoryRelationFilter {
    is?: InstanceType<typeof ProgramCategoryWhereInput>;
    isNot?: InstanceType<typeof ProgramCategoryWhereInput>;
}
export declare class ProgramCategoryScalarWhereWithAggregatesInput {
    AND?: Array<ProgramCategoryScalarWhereWithAggregatesInput>;
    OR?: Array<ProgramCategoryScalarWhereWithAggregatesInput>;
    NOT?: Array<ProgramCategoryScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class ProgramCategorySumAggregateInput {
    id?: true;
}
export declare class ProgramCategorySumAggregate {
    id?: number;
}
export declare class ProgramCategorySumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class ProgramCategoryUncheckedCreateWithoutProgramsInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramCategoryUncheckedCreateInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    programs?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCategoryInput>;
}
export declare class ProgramCategoryUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramCategoryUncheckedUpdateWithoutProgramsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramCategoryUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    programs?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCategoryNestedInput>;
}
export declare class ProgramCategoryUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramCategoryUpdateOneRequiredWithoutProgramsNestedInput {
    create?: InstanceType<typeof ProgramCategoryCreateWithoutProgramsInput>;
    connectOrCreate?: InstanceType<typeof ProgramCategoryCreateOrConnectWithoutProgramsInput>;
    upsert?: InstanceType<typeof ProgramCategoryUpsertWithoutProgramsInput>;
    connect?: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ProgramCategoryUpdateToOneWithWhereWithoutProgramsInput>;
}
export declare class ProgramCategoryUpdateToOneWithWhereWithoutProgramsInput {
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
    data: InstanceType<typeof ProgramCategoryUpdateWithoutProgramsInput>;
}
export declare class ProgramCategoryUpdateWithoutProgramsInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramCategoryUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    programs?: InstanceType<typeof ProgramUpdateManyWithoutCategoryNestedInput>;
}
export declare class ProgramCategoryUpsertWithoutProgramsInput {
    update: InstanceType<typeof ProgramCategoryUpdateWithoutProgramsInput>;
    create: InstanceType<typeof ProgramCategoryCreateWithoutProgramsInput>;
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
}
export declare class ProgramCategoryWhereUniqueInput {
    id?: number;
    AND?: Array<ProgramCategoryWhereInput>;
    OR?: Array<ProgramCategoryWhereInput>;
    NOT?: Array<ProgramCategoryWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    programs?: InstanceType<typeof ProgramListRelationFilter>;
}
export declare class ProgramCategoryWhereInput {
    AND?: Array<ProgramCategoryWhereInput>;
    OR?: Array<ProgramCategoryWhereInput>;
    NOT?: Array<ProgramCategoryWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    programs?: InstanceType<typeof ProgramListRelationFilter>;
}
export declare class ProgramCategory {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    programs?: Array<Program>;
    _count?: InstanceType<typeof ProgramCategoryCount>;
}
export declare class UpdateManyProgramCategoryArgs {
    data: InstanceType<typeof ProgramCategoryUpdateManyMutationInput>;
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
}
export declare class UpdateOneProgramCategoryArgs {
    data: InstanceType<typeof ProgramCategoryUpdateInput>;
    where: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
}
export declare class UpsertOneProgramCategoryArgs {
    where: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramCategoryCreateInput>;
    update: InstanceType<typeof ProgramCategoryUpdateInput>;
}
export declare class AggregateProject {
    _count?: InstanceType<typeof ProjectCountAggregate>;
    _avg?: InstanceType<typeof ProjectAvgAggregate>;
    _sum?: InstanceType<typeof ProjectSumAggregate>;
    _min?: InstanceType<typeof ProjectMinAggregate>;
    _max?: InstanceType<typeof ProjectMaxAggregate>;
}
export declare class CreateManyProjectArgs {
    data: Array<ProjectCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneProjectArgs {
    data: InstanceType<typeof ProjectCreateInput>;
}
export declare class DeleteManyProjectArgs {
    where?: InstanceType<typeof ProjectWhereInput>;
}
export declare class DeleteOneProjectArgs {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class FindFirstProjectOrThrowArgs {
    where?: InstanceType<typeof ProjectWhereInput>;
    orderBy?: Array<ProjectOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProjectScalarFieldEnum>;
}
export declare class FindFirstProjectArgs {
    where?: InstanceType<typeof ProjectWhereInput>;
    orderBy?: Array<ProjectOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProjectScalarFieldEnum>;
}
export declare class FindManyProjectArgs {
    where?: InstanceType<typeof ProjectWhereInput>;
    orderBy?: Array<ProjectOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProjectScalarFieldEnum>;
}
export declare class FindUniqueProjectOrThrowArgs {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class FindUniqueProjectArgs {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class ProjectAggregateArgs {
    where?: InstanceType<typeof ProjectWhereInput>;
    orderBy?: Array<ProjectOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProjectCountAggregateInput>;
    _avg?: InstanceType<typeof ProjectAvgAggregateInput>;
    _sum?: InstanceType<typeof ProjectSumAggregateInput>;
    _min?: InstanceType<typeof ProjectMinAggregateInput>;
    _max?: InstanceType<typeof ProjectMaxAggregateInput>;
}
export declare class ProjectAvgAggregateInput {
    id?: true;
    returnRate?: true;
    goalAmount?: true;
    currentAmount?: true;
    minimumInvestment?: true;
    maxInvestor?: true;
    accountId?: true;
}
export declare class ProjectAvgAggregate {
    id?: number;
    returnRate?: number;
    goalAmount?: number;
    currentAmount?: number;
    minimumInvestment?: number;
    maxInvestor?: number;
    accountId?: number;
}
export declare class ProjectAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    returnRate?: keyof typeof SortOrder;
    goalAmount?: keyof typeof SortOrder;
    currentAmount?: keyof typeof SortOrder;
    minimumInvestment?: keyof typeof SortOrder;
    maxInvestor?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class ProjectCountAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    projectCategory?: true;
    startDate?: true;
    endDate?: true;
    returnRate?: true;
    goalAmount?: true;
    currentAmount?: true;
    minimumInvestment?: true;
    maxInvestor?: true;
    accountId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class ProjectCountAggregate {
    id: number;
    name: number;
    description: number;
    projectCategory: number;
    startDate: number;
    endDate: number;
    returnRate: number;
    goalAmount: number;
    currentAmount: number;
    minimumInvestment: number;
    maxInvestor: number;
    accountId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class ProjectCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    projectCategory?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    endDate?: keyof typeof SortOrder;
    returnRate?: keyof typeof SortOrder;
    goalAmount?: keyof typeof SortOrder;
    currentAmount?: keyof typeof SortOrder;
    minimumInvestment?: keyof typeof SortOrder;
    maxInvestor?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProjectCount {
    images?: number;
    investors?: number;
}
export declare class ProjectCreateManyInput {
    id?: number;
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    currentAmount: number;
    minimumInvestment: number;
    maxInvestor: number;
    accountId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProjectCreateNestedManyWithoutInvestorsInput {
    create?: Array<ProjectCreateWithoutInvestorsInput>;
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutInvestorsInput>;
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>>;
}
export declare class ProjectCreateNestedOneWithoutAccountInput {
    create?: InstanceType<typeof ProjectCreateWithoutAccountInput>;
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutAccountInput>;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class ProjectCreateNestedOneWithoutImagesInput {
    create?: InstanceType<typeof ProjectCreateWithoutImagesInput>;
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutImagesInput>;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class ProjectCreateOrConnectWithoutAccountInput {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    create: InstanceType<typeof ProjectCreateWithoutAccountInput>;
}
export declare class ProjectCreateOrConnectWithoutImagesInput {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    create: InstanceType<typeof ProjectCreateWithoutImagesInput>;
}
export declare class ProjectCreateOrConnectWithoutInvestorsInput {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    create: InstanceType<typeof ProjectCreateWithoutInvestorsInput>;
}
export declare class ProjectCreateWithoutAccountInput {
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    currentAmount: number;
    minimumInvestment: number;
    maxInvestor: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutProjectImageInput>;
    investors?: InstanceType<typeof UserCreateNestedManyWithoutProjectsInvestmentInput>;
}
export declare class ProjectCreateWithoutImagesInput {
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    currentAmount: number;
    minimumInvestment: number;
    maxInvestor: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    investors?: InstanceType<typeof UserCreateNestedManyWithoutProjectsInvestmentInput>;
    account: InstanceType<typeof AccountCreateNestedOneWithoutProjectInput>;
}
export declare class ProjectCreateWithoutInvestorsInput {
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    currentAmount: number;
    minimumInvestment: number;
    maxInvestor: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutProjectImageInput>;
    account: InstanceType<typeof AccountCreateNestedOneWithoutProjectInput>;
}
export declare class ProjectCreateInput {
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    currentAmount: number;
    minimumInvestment: number;
    maxInvestor: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutProjectImageInput>;
    investors?: InstanceType<typeof UserCreateNestedManyWithoutProjectsInvestmentInput>;
    account: InstanceType<typeof AccountCreateNestedOneWithoutProjectInput>;
}
export declare class ProjectGroupByArgs {
    where?: InstanceType<typeof ProjectWhereInput>;
    orderBy?: Array<ProjectOrderByWithAggregationInput>;
    by: Array<keyof typeof ProjectScalarFieldEnum>;
    having?: InstanceType<typeof ProjectScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProjectCountAggregateInput>;
    _avg?: InstanceType<typeof ProjectAvgAggregateInput>;
    _sum?: InstanceType<typeof ProjectSumAggregateInput>;
    _min?: InstanceType<typeof ProjectMinAggregateInput>;
    _max?: InstanceType<typeof ProjectMaxAggregateInput>;
}
export declare class ProjectGroupBy {
    id: number;
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    currentAmount: number;
    minimumInvestment: number;
    maxInvestor: number;
    accountId: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof ProjectCountAggregate>;
    _avg?: InstanceType<typeof ProjectAvgAggregate>;
    _sum?: InstanceType<typeof ProjectSumAggregate>;
    _min?: InstanceType<typeof ProjectMinAggregate>;
    _max?: InstanceType<typeof ProjectMaxAggregate>;
}
export declare class ProjectListRelationFilter {
    every?: InstanceType<typeof ProjectWhereInput>;
    some?: InstanceType<typeof ProjectWhereInput>;
    none?: InstanceType<typeof ProjectWhereInput>;
}
export declare class ProjectMaxAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    projectCategory?: true;
    startDate?: true;
    endDate?: true;
    returnRate?: true;
    goalAmount?: true;
    currentAmount?: true;
    minimumInvestment?: true;
    maxInvestor?: true;
    accountId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProjectMaxAggregate {
    id?: number;
    name?: string;
    description?: string;
    projectCategory?: keyof typeof ProjectCategory;
    startDate?: Date | string;
    endDate?: Date | string;
    returnRate?: number;
    goalAmount?: number;
    currentAmount?: number;
    minimumInvestment?: number;
    maxInvestor?: number;
    accountId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProjectMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    projectCategory?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    endDate?: keyof typeof SortOrder;
    returnRate?: keyof typeof SortOrder;
    goalAmount?: keyof typeof SortOrder;
    currentAmount?: keyof typeof SortOrder;
    minimumInvestment?: keyof typeof SortOrder;
    maxInvestor?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProjectMinAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    projectCategory?: true;
    startDate?: true;
    endDate?: true;
    returnRate?: true;
    goalAmount?: true;
    currentAmount?: true;
    minimumInvestment?: true;
    maxInvestor?: true;
    accountId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProjectMinAggregate {
    id?: number;
    name?: string;
    description?: string;
    projectCategory?: keyof typeof ProjectCategory;
    startDate?: Date | string;
    endDate?: Date | string;
    returnRate?: number;
    goalAmount?: number;
    currentAmount?: number;
    minimumInvestment?: number;
    maxInvestor?: number;
    accountId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProjectMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    projectCategory?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    endDate?: keyof typeof SortOrder;
    returnRate?: keyof typeof SortOrder;
    goalAmount?: keyof typeof SortOrder;
    currentAmount?: keyof typeof SortOrder;
    minimumInvestment?: keyof typeof SortOrder;
    maxInvestor?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProjectNullableRelationFilter {
    is?: InstanceType<typeof ProjectWhereInput>;
    isNot?: InstanceType<typeof ProjectWhereInput>;
}
export declare class ProjectOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ProjectOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    projectCategory?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    endDate?: keyof typeof SortOrder;
    returnRate?: keyof typeof SortOrder;
    goalAmount?: keyof typeof SortOrder;
    currentAmount?: keyof typeof SortOrder;
    minimumInvestment?: keyof typeof SortOrder;
    maxInvestor?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ProjectCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ProjectAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ProjectMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ProjectMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ProjectSumOrderByAggregateInput>;
}
export declare class ProjectOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    projectCategory?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    endDate?: keyof typeof SortOrder;
    returnRate?: keyof typeof SortOrder;
    goalAmount?: keyof typeof SortOrder;
    currentAmount?: keyof typeof SortOrder;
    minimumInvestment?: keyof typeof SortOrder;
    maxInvestor?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    images?: InstanceType<typeof ImagesOrderByRelationAggregateInput>;
    investors?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    account?: InstanceType<typeof AccountOrderByWithRelationInput>;
}
export declare class ProjectScalarWhereWithAggregatesInput {
    AND?: Array<ProjectScalarWhereWithAggregatesInput>;
    OR?: Array<ProjectScalarWhereWithAggregatesInput>;
    NOT?: Array<ProjectScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryWithAggregatesFilter>;
    startDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    endDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    returnRate?: InstanceType<typeof FloatWithAggregatesFilter>;
    goalAmount?: InstanceType<typeof IntWithAggregatesFilter>;
    currentAmount?: InstanceType<typeof FloatWithAggregatesFilter>;
    minimumInvestment?: InstanceType<typeof IntWithAggregatesFilter>;
    maxInvestor?: InstanceType<typeof IntWithAggregatesFilter>;
    accountId?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class ProjectScalarWhereInput {
    AND?: Array<ProjectScalarWhereInput>;
    OR?: Array<ProjectScalarWhereInput>;
    NOT?: Array<ProjectScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    endDate?: InstanceType<typeof DateTimeFilter>;
    returnRate?: InstanceType<typeof FloatFilter>;
    goalAmount?: InstanceType<typeof IntFilter>;
    currentAmount?: InstanceType<typeof FloatFilter>;
    minimumInvestment?: InstanceType<typeof IntFilter>;
    maxInvestor?: InstanceType<typeof IntFilter>;
    accountId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class ProjectSumAggregateInput {
    id?: true;
    returnRate?: true;
    goalAmount?: true;
    currentAmount?: true;
    minimumInvestment?: true;
    maxInvestor?: true;
    accountId?: true;
}
export declare class ProjectSumAggregate {
    id?: number;
    returnRate?: number;
    goalAmount?: number;
    currentAmount?: number;
    minimumInvestment?: number;
    maxInvestor?: number;
    accountId?: number;
}
export declare class ProjectSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    returnRate?: keyof typeof SortOrder;
    goalAmount?: keyof typeof SortOrder;
    currentAmount?: keyof typeof SortOrder;
    minimumInvestment?: keyof typeof SortOrder;
    maxInvestor?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class ProjectUncheckedCreateNestedManyWithoutInvestorsInput {
    create?: Array<ProjectCreateWithoutInvestorsInput>;
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutInvestorsInput>;
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>>;
}
export declare class ProjectUncheckedCreateNestedOneWithoutAccountInput {
    create?: InstanceType<typeof ProjectCreateWithoutAccountInput>;
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutAccountInput>;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class ProjectUncheckedCreateWithoutAccountInput {
    id?: number;
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    currentAmount: number;
    minimumInvestment: number;
    maxInvestor: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutProjectImageInput>;
    investors?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutProjectsInvestmentInput>;
}
export declare class ProjectUncheckedCreateWithoutImagesInput {
    id?: number;
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    currentAmount: number;
    minimumInvestment: number;
    maxInvestor: number;
    accountId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    investors?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutProjectsInvestmentInput>;
}
export declare class ProjectUncheckedCreateWithoutInvestorsInput {
    id?: number;
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    currentAmount: number;
    minimumInvestment: number;
    maxInvestor: number;
    accountId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutProjectImageInput>;
}
export declare class ProjectUncheckedCreateInput {
    id?: number;
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    currentAmount: number;
    minimumInvestment: number;
    maxInvestor: number;
    accountId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutProjectImageInput>;
    investors?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutProjectsInvestmentInput>;
}
export declare class ProjectUncheckedUpdateManyWithoutInvestorsNestedInput {
    create?: Array<ProjectCreateWithoutInvestorsInput>;
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutInvestorsInput>;
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutInvestorsInput>;
    set?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>>;
    disconnect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>>;
    delete?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>>;
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>>;
    update?: Array<ProjectUpdateWithWhereUniqueWithoutInvestorsInput>;
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutInvestorsInput>;
    deleteMany?: Array<ProjectScalarWhereInput>;
}
export declare class ProjectUncheckedUpdateManyWithoutInvestorsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProjectUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProjectUncheckedUpdateOneWithoutAccountNestedInput {
    create?: InstanceType<typeof ProjectCreateWithoutAccountInput>;
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutAccountInput>;
    upsert?: InstanceType<typeof ProjectUpsertWithoutAccountInput>;
    disconnect?: InstanceType<typeof ProjectWhereInput>;
    delete?: InstanceType<typeof ProjectWhereInput>;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    update?: InstanceType<typeof ProjectUpdateToOneWithWhereWithoutAccountInput>;
}
export declare class ProjectUncheckedUpdateWithoutAccountInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutProjectImageNestedInput>;
    investors?: InstanceType<typeof UserUncheckedUpdateManyWithoutProjectsInvestmentNestedInput>;
}
export declare class ProjectUncheckedUpdateWithoutImagesInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    investors?: InstanceType<typeof UserUncheckedUpdateManyWithoutProjectsInvestmentNestedInput>;
}
export declare class ProjectUncheckedUpdateWithoutInvestorsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutProjectImageNestedInput>;
}
export declare class ProjectUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutProjectImageNestedInput>;
    investors?: InstanceType<typeof UserUncheckedUpdateManyWithoutProjectsInvestmentNestedInput>;
}
export declare class ProjectUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProjectUpdateManyWithWhereWithoutInvestorsInput {
    where: InstanceType<typeof ProjectScalarWhereInput>;
    data: InstanceType<typeof ProjectUpdateManyMutationInput>;
}
export declare class ProjectUpdateManyWithoutInvestorsNestedInput {
    create?: Array<ProjectCreateWithoutInvestorsInput>;
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutInvestorsInput>;
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutInvestorsInput>;
    set?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>>;
    disconnect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>>;
    delete?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>>;
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>>;
    update?: Array<ProjectUpdateWithWhereUniqueWithoutInvestorsInput>;
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutInvestorsInput>;
    deleteMany?: Array<ProjectScalarWhereInput>;
}
export declare class ProjectUpdateOneWithoutAccountNestedInput {
    create?: InstanceType<typeof ProjectCreateWithoutAccountInput>;
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutAccountInput>;
    upsert?: InstanceType<typeof ProjectUpsertWithoutAccountInput>;
    disconnect?: InstanceType<typeof ProjectWhereInput>;
    delete?: InstanceType<typeof ProjectWhereInput>;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    update?: InstanceType<typeof ProjectUpdateToOneWithWhereWithoutAccountInput>;
}
export declare class ProjectUpdateOneWithoutImagesNestedInput {
    create?: InstanceType<typeof ProjectCreateWithoutImagesInput>;
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutImagesInput>;
    upsert?: InstanceType<typeof ProjectUpsertWithoutImagesInput>;
    disconnect?: InstanceType<typeof ProjectWhereInput>;
    delete?: InstanceType<typeof ProjectWhereInput>;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    update?: InstanceType<typeof ProjectUpdateToOneWithWhereWithoutImagesInput>;
}
export declare class ProjectUpdateToOneWithWhereWithoutAccountInput {
    where?: InstanceType<typeof ProjectWhereInput>;
    data: InstanceType<typeof ProjectUpdateWithoutAccountInput>;
}
export declare class ProjectUpdateToOneWithWhereWithoutImagesInput {
    where?: InstanceType<typeof ProjectWhereInput>;
    data: InstanceType<typeof ProjectUpdateWithoutImagesInput>;
}
export declare class ProjectUpdateWithWhereUniqueWithoutInvestorsInput {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    data: InstanceType<typeof ProjectUpdateWithoutInvestorsInput>;
}
export declare class ProjectUpdateWithoutAccountInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutProjectImageNestedInput>;
    investors?: InstanceType<typeof UserUpdateManyWithoutProjectsInvestmentNestedInput>;
}
export declare class ProjectUpdateWithoutImagesInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    investors?: InstanceType<typeof UserUpdateManyWithoutProjectsInvestmentNestedInput>;
    account?: InstanceType<typeof AccountUpdateOneRequiredWithoutProjectNestedInput>;
}
export declare class ProjectUpdateWithoutInvestorsInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutProjectImageNestedInput>;
    account?: InstanceType<typeof AccountUpdateOneRequiredWithoutProjectNestedInput>;
}
export declare class ProjectUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutProjectImageNestedInput>;
    investors?: InstanceType<typeof UserUpdateManyWithoutProjectsInvestmentNestedInput>;
    account?: InstanceType<typeof AccountUpdateOneRequiredWithoutProjectNestedInput>;
}
export declare class ProjectUpsertWithWhereUniqueWithoutInvestorsInput {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    update: InstanceType<typeof ProjectUpdateWithoutInvestorsInput>;
    create: InstanceType<typeof ProjectCreateWithoutInvestorsInput>;
}
export declare class ProjectUpsertWithoutAccountInput {
    update: InstanceType<typeof ProjectUpdateWithoutAccountInput>;
    create: InstanceType<typeof ProjectCreateWithoutAccountInput>;
    where?: InstanceType<typeof ProjectWhereInput>;
}
export declare class ProjectUpsertWithoutImagesInput {
    update: InstanceType<typeof ProjectUpdateWithoutImagesInput>;
    create: InstanceType<typeof ProjectCreateWithoutImagesInput>;
    where?: InstanceType<typeof ProjectWhereInput>;
}
export declare class ProjectWhereUniqueInput {
    id?: number;
    accountId?: number;
    AND?: Array<ProjectWhereInput>;
    OR?: Array<ProjectWhereInput>;
    NOT?: Array<ProjectWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    endDate?: InstanceType<typeof DateTimeFilter>;
    returnRate?: InstanceType<typeof FloatFilter>;
    goalAmount?: InstanceType<typeof IntFilter>;
    currentAmount?: InstanceType<typeof FloatFilter>;
    minimumInvestment?: InstanceType<typeof IntFilter>;
    maxInvestor?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    images?: InstanceType<typeof ImagesListRelationFilter>;
    investors?: InstanceType<typeof UserListRelationFilter>;
    account?: InstanceType<typeof AccountRelationFilter>;
}
export declare class ProjectWhereInput {
    AND?: Array<ProjectWhereInput>;
    OR?: Array<ProjectWhereInput>;
    NOT?: Array<ProjectWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    endDate?: InstanceType<typeof DateTimeFilter>;
    returnRate?: InstanceType<typeof FloatFilter>;
    goalAmount?: InstanceType<typeof IntFilter>;
    currentAmount?: InstanceType<typeof FloatFilter>;
    minimumInvestment?: InstanceType<typeof IntFilter>;
    maxInvestor?: InstanceType<typeof IntFilter>;
    accountId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    images?: InstanceType<typeof ImagesListRelationFilter>;
    investors?: InstanceType<typeof UserListRelationFilter>;
    account?: InstanceType<typeof AccountRelationFilter>;
}
export declare class Project {
    id: number;
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date;
    endDate: Date;
    returnRate: number;
    goalAmount: number;
    currentAmount: number;
    minimumInvestment: number;
    maxInvestor: number;
    accountId: number;
    createdAt: Date;
    updatedAt: Date;
    images?: Array<Images>;
    investors?: Array<User>;
    account?: InstanceType<typeof Account>;
    _count?: InstanceType<typeof ProjectCount>;
}
export declare class UpdateManyProjectArgs {
    data: InstanceType<typeof ProjectUpdateManyMutationInput>;
    where?: InstanceType<typeof ProjectWhereInput>;
}
export declare class UpdateOneProjectArgs {
    data: InstanceType<typeof ProjectUpdateInput>;
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class UpsertOneProjectArgs {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    create: InstanceType<typeof ProjectCreateInput>;
    update: InstanceType<typeof ProjectUpdateInput>;
}
export declare class AggregateReward {
    _count?: InstanceType<typeof RewardCountAggregate>;
    _avg?: InstanceType<typeof RewardAvgAggregate>;
    _sum?: InstanceType<typeof RewardSumAggregate>;
    _min?: InstanceType<typeof RewardMinAggregate>;
    _max?: InstanceType<typeof RewardMaxAggregate>;
}
export declare class CreateManyRewardArgs {
    data: Array<RewardCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneRewardArgs {
    data: InstanceType<typeof RewardCreateInput>;
}
export declare class DeleteManyRewardArgs {
    where?: InstanceType<typeof RewardWhereInput>;
}
export declare class DeleteOneRewardArgs {
    where: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
}
export declare class FindFirstRewardOrThrowArgs {
    where?: InstanceType<typeof RewardWhereInput>;
    orderBy?: Array<RewardOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RewardScalarFieldEnum>;
}
export declare class FindFirstRewardArgs {
    where?: InstanceType<typeof RewardWhereInput>;
    orderBy?: Array<RewardOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RewardScalarFieldEnum>;
}
export declare class FindManyRewardArgs {
    where?: InstanceType<typeof RewardWhereInput>;
    orderBy?: Array<RewardOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RewardScalarFieldEnum>;
}
export declare class FindUniqueRewardOrThrowArgs {
    where: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
}
export declare class FindUniqueRewardArgs {
    where: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
}
export declare class RewardAggregateArgs {
    where?: InstanceType<typeof RewardWhereInput>;
    orderBy?: Array<RewardOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof RewardCountAggregateInput>;
    _avg?: InstanceType<typeof RewardAvgAggregateInput>;
    _sum?: InstanceType<typeof RewardSumAggregateInput>;
    _min?: InstanceType<typeof RewardMinAggregateInput>;
    _max?: InstanceType<typeof RewardMaxAggregateInput>;
}
export declare class RewardAvgAggregateInput {
    id?: true;
    pointCost?: true;
}
export declare class RewardAvgAggregate {
    id?: number;
    pointCost?: number;
}
export declare class RewardAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    pointCost?: keyof typeof SortOrder;
}
export declare class RewardCountAggregateInput {
    id?: true;
    name?: true;
    pointCost?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class RewardCountAggregate {
    id: number;
    name: number;
    pointCost: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class RewardCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    pointCost?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class RewardCount {
    images?: number;
    claimers?: number;
}
export declare class RewardCreateManyInput {
    id?: number;
    name: string;
    pointCost: number;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class RewardCreateNestedManyWithoutClaimersInput {
    create?: Array<RewardCreateWithoutClaimersInput>;
    connectOrCreate?: Array<RewardCreateOrConnectWithoutClaimersInput>;
    connect?: Array<Prisma.AtLeast<RewardWhereUniqueInput, 'id'>>;
}
export declare class RewardCreateNestedOneWithoutImagesInput {
    create?: InstanceType<typeof RewardCreateWithoutImagesInput>;
    connectOrCreate?: InstanceType<typeof RewardCreateOrConnectWithoutImagesInput>;
    connect?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
}
export declare class RewardCreateOrConnectWithoutClaimersInput {
    where: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RewardCreateWithoutClaimersInput>;
}
export declare class RewardCreateOrConnectWithoutImagesInput {
    where: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RewardCreateWithoutImagesInput>;
}
export declare class RewardCreateWithoutClaimersInput {
    name: string;
    pointCost: number;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutRewardImageInput>;
}
export declare class RewardCreateWithoutImagesInput {
    name: string;
    pointCost: number;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    claimers?: InstanceType<typeof UserCreateNestedManyWithoutClaimedRewardsInput>;
}
export declare class RewardCreateInput {
    name: string;
    pointCost: number;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutRewardImageInput>;
    claimers?: InstanceType<typeof UserCreateNestedManyWithoutClaimedRewardsInput>;
}
export declare class RewardGroupByArgs {
    where?: InstanceType<typeof RewardWhereInput>;
    orderBy?: Array<RewardOrderByWithAggregationInput>;
    by: Array<keyof typeof RewardScalarFieldEnum>;
    having?: InstanceType<typeof RewardScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof RewardCountAggregateInput>;
    _avg?: InstanceType<typeof RewardAvgAggregateInput>;
    _sum?: InstanceType<typeof RewardSumAggregateInput>;
    _min?: InstanceType<typeof RewardMinAggregateInput>;
    _max?: InstanceType<typeof RewardMaxAggregateInput>;
}
export declare class RewardGroupBy {
    id: number;
    name: string;
    pointCost: number;
    description: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof RewardCountAggregate>;
    _avg?: InstanceType<typeof RewardAvgAggregate>;
    _sum?: InstanceType<typeof RewardSumAggregate>;
    _min?: InstanceType<typeof RewardMinAggregate>;
    _max?: InstanceType<typeof RewardMaxAggregate>;
}
export declare class RewardListRelationFilter {
    every?: InstanceType<typeof RewardWhereInput>;
    some?: InstanceType<typeof RewardWhereInput>;
    none?: InstanceType<typeof RewardWhereInput>;
}
export declare class RewardMaxAggregateInput {
    id?: true;
    name?: true;
    pointCost?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class RewardMaxAggregate {
    id?: number;
    name?: string;
    pointCost?: number;
    description?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class RewardMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    pointCost?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class RewardMinAggregateInput {
    id?: true;
    name?: true;
    pointCost?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class RewardMinAggregate {
    id?: number;
    name?: string;
    pointCost?: number;
    description?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class RewardMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    pointCost?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class RewardNullableRelationFilter {
    is?: InstanceType<typeof RewardWhereInput>;
    isNot?: InstanceType<typeof RewardWhereInput>;
}
export declare class RewardOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class RewardOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    pointCost?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof RewardCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof RewardAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof RewardMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof RewardMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof RewardSumOrderByAggregateInput>;
}
export declare class RewardOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    pointCost?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    images?: InstanceType<typeof ImagesOrderByRelationAggregateInput>;
    claimers?: InstanceType<typeof UserOrderByRelationAggregateInput>;
}
export declare class RewardScalarWhereWithAggregatesInput {
    AND?: Array<RewardScalarWhereWithAggregatesInput>;
    OR?: Array<RewardScalarWhereWithAggregatesInput>;
    NOT?: Array<RewardScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    pointCost?: InstanceType<typeof FloatWithAggregatesFilter>;
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class RewardScalarWhereInput {
    AND?: Array<RewardScalarWhereInput>;
    OR?: Array<RewardScalarWhereInput>;
    NOT?: Array<RewardScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    pointCost?: InstanceType<typeof FloatFilter>;
    description?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class RewardSumAggregateInput {
    id?: true;
    pointCost?: true;
}
export declare class RewardSumAggregate {
    id?: number;
    pointCost?: number;
}
export declare class RewardSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    pointCost?: keyof typeof SortOrder;
}
export declare class RewardUncheckedCreateNestedManyWithoutClaimersInput {
    create?: Array<RewardCreateWithoutClaimersInput>;
    connectOrCreate?: Array<RewardCreateOrConnectWithoutClaimersInput>;
    connect?: Array<Prisma.AtLeast<RewardWhereUniqueInput, 'id'>>;
}
export declare class RewardUncheckedCreateWithoutClaimersInput {
    id?: number;
    name: string;
    pointCost: number;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutRewardImageInput>;
}
export declare class RewardUncheckedCreateWithoutImagesInput {
    id?: number;
    name: string;
    pointCost: number;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    claimers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClaimedRewardsInput>;
}
export declare class RewardUncheckedCreateInput {
    id?: number;
    name: string;
    pointCost: number;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutRewardImageInput>;
    claimers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClaimedRewardsInput>;
}
export declare class RewardUncheckedUpdateManyWithoutClaimersNestedInput {
    create?: Array<RewardCreateWithoutClaimersInput>;
    connectOrCreate?: Array<RewardCreateOrConnectWithoutClaimersInput>;
    upsert?: Array<RewardUpsertWithWhereUniqueWithoutClaimersInput>;
    set?: Array<Prisma.AtLeast<RewardWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<RewardWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<RewardWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<RewardWhereUniqueInput, 'id'>>;
    update?: Array<RewardUpdateWithWhereUniqueWithoutClaimersInput>;
    updateMany?: Array<RewardUpdateManyWithWhereWithoutClaimersInput>;
    deleteMany?: Array<RewardScalarWhereInput>;
}
export declare class RewardUncheckedUpdateManyWithoutClaimersInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    pointCost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class RewardUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    pointCost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class RewardUncheckedUpdateWithoutClaimersInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    pointCost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutRewardImageNestedInput>;
}
export declare class RewardUncheckedUpdateWithoutImagesInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    pointCost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    claimers?: InstanceType<typeof UserUncheckedUpdateManyWithoutClaimedRewardsNestedInput>;
}
export declare class RewardUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    pointCost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutRewardImageNestedInput>;
    claimers?: InstanceType<typeof UserUncheckedUpdateManyWithoutClaimedRewardsNestedInput>;
}
export declare class RewardUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    pointCost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class RewardUpdateManyWithWhereWithoutClaimersInput {
    where: InstanceType<typeof RewardScalarWhereInput>;
    data: InstanceType<typeof RewardUpdateManyMutationInput>;
}
export declare class RewardUpdateManyWithoutClaimersNestedInput {
    create?: Array<RewardCreateWithoutClaimersInput>;
    connectOrCreate?: Array<RewardCreateOrConnectWithoutClaimersInput>;
    upsert?: Array<RewardUpsertWithWhereUniqueWithoutClaimersInput>;
    set?: Array<Prisma.AtLeast<RewardWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<RewardWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<RewardWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<RewardWhereUniqueInput, 'id'>>;
    update?: Array<RewardUpdateWithWhereUniqueWithoutClaimersInput>;
    updateMany?: Array<RewardUpdateManyWithWhereWithoutClaimersInput>;
    deleteMany?: Array<RewardScalarWhereInput>;
}
export declare class RewardUpdateOneWithoutImagesNestedInput {
    create?: InstanceType<typeof RewardCreateWithoutImagesInput>;
    connectOrCreate?: InstanceType<typeof RewardCreateOrConnectWithoutImagesInput>;
    upsert?: InstanceType<typeof RewardUpsertWithoutImagesInput>;
    disconnect?: InstanceType<typeof RewardWhereInput>;
    delete?: InstanceType<typeof RewardWhereInput>;
    connect?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof RewardUpdateToOneWithWhereWithoutImagesInput>;
}
export declare class RewardUpdateToOneWithWhereWithoutImagesInput {
    where?: InstanceType<typeof RewardWhereInput>;
    data: InstanceType<typeof RewardUpdateWithoutImagesInput>;
}
export declare class RewardUpdateWithWhereUniqueWithoutClaimersInput {
    where: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    data: InstanceType<typeof RewardUpdateWithoutClaimersInput>;
}
export declare class RewardUpdateWithoutClaimersInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    pointCost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutRewardImageNestedInput>;
}
export declare class RewardUpdateWithoutImagesInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    pointCost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    claimers?: InstanceType<typeof UserUpdateManyWithoutClaimedRewardsNestedInput>;
}
export declare class RewardUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    pointCost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutRewardImageNestedInput>;
    claimers?: InstanceType<typeof UserUpdateManyWithoutClaimedRewardsNestedInput>;
}
export declare class RewardUpsertWithWhereUniqueWithoutClaimersInput {
    where: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    update: InstanceType<typeof RewardUpdateWithoutClaimersInput>;
    create: InstanceType<typeof RewardCreateWithoutClaimersInput>;
}
export declare class RewardUpsertWithoutImagesInput {
    update: InstanceType<typeof RewardUpdateWithoutImagesInput>;
    create: InstanceType<typeof RewardCreateWithoutImagesInput>;
    where?: InstanceType<typeof RewardWhereInput>;
}
export declare class RewardWhereUniqueInput {
    id?: number;
    AND?: Array<RewardWhereInput>;
    OR?: Array<RewardWhereInput>;
    NOT?: Array<RewardWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    pointCost?: InstanceType<typeof FloatFilter>;
    description?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    images?: InstanceType<typeof ImagesListRelationFilter>;
    claimers?: InstanceType<typeof UserListRelationFilter>;
}
export declare class RewardWhereInput {
    AND?: Array<RewardWhereInput>;
    OR?: Array<RewardWhereInput>;
    NOT?: Array<RewardWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    pointCost?: InstanceType<typeof FloatFilter>;
    description?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    images?: InstanceType<typeof ImagesListRelationFilter>;
    claimers?: InstanceType<typeof UserListRelationFilter>;
}
export declare class Reward {
    id: number;
    name: string;
    pointCost: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    images?: Array<Images>;
    claimers?: Array<User>;
    _count?: InstanceType<typeof RewardCount>;
}
export declare class UpdateManyRewardArgs {
    data: InstanceType<typeof RewardUpdateManyMutationInput>;
    where?: InstanceType<typeof RewardWhereInput>;
}
export declare class UpdateOneRewardArgs {
    data: InstanceType<typeof RewardUpdateInput>;
    where: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
}
export declare class UpsertOneRewardArgs {
    where: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RewardCreateInput>;
    update: InstanceType<typeof RewardUpdateInput>;
}
export declare class AggregateSchool {
    _count?: InstanceType<typeof SchoolCountAggregate>;
    _avg?: InstanceType<typeof SchoolAvgAggregate>;
    _sum?: InstanceType<typeof SchoolSumAggregate>;
    _min?: InstanceType<typeof SchoolMinAggregate>;
    _max?: InstanceType<typeof SchoolMaxAggregate>;
}
export declare class CreateManySchoolArgs {
    data: Array<SchoolCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneSchoolArgs {
    data: InstanceType<typeof SchoolCreateInput>;
}
export declare class DeleteManySchoolArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
}
export declare class DeleteOneSchoolArgs {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class FindFirstSchoolOrThrowArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
    orderBy?: Array<SchoolOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SchoolScalarFieldEnum>;
}
export declare class FindFirstSchoolArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
    orderBy?: Array<SchoolOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SchoolScalarFieldEnum>;
}
export declare class FindManySchoolArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
    orderBy?: Array<SchoolOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SchoolScalarFieldEnum>;
}
export declare class FindUniqueSchoolOrThrowArgs {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class FindUniqueSchoolArgs {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class SchoolAggregateArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
    orderBy?: Array<SchoolOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SchoolCountAggregateInput>;
    _avg?: InstanceType<typeof SchoolAvgAggregateInput>;
    _sum?: InstanceType<typeof SchoolSumAggregateInput>;
    _min?: InstanceType<typeof SchoolMinAggregateInput>;
    _max?: InstanceType<typeof SchoolMaxAggregateInput>;
}
export declare class SchoolAvgAggregateInput {
    id?: true;
    addressId?: true;
}
export declare class SchoolAvgAggregate {
    id?: number;
    addressId?: number;
}
export declare class SchoolAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
}
export declare class SchoolCountAggregateInput {
    id?: true;
    name?: true;
    addressId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class SchoolCountAggregate {
    id: number;
    name: number;
    addressId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class SchoolCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class SchoolCount {
    students?: number;
}
export declare class SchoolCreateManyInput {
    id?: number;
    name: string;
    addressId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class SchoolCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof SchoolCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class SchoolCreateNestedOneWithoutStudentsInput {
    create?: InstanceType<typeof SchoolCreateWithoutStudentsInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutStudentsInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class SchoolCreateOrConnectWithoutAddressInput {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    create: InstanceType<typeof SchoolCreateWithoutAddressInput>;
}
export declare class SchoolCreateOrConnectWithoutStudentsInput {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    create: InstanceType<typeof SchoolCreateWithoutStudentsInput>;
}
export declare class SchoolCreateWithoutAddressInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    students?: InstanceType<typeof UserCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolCreateWithoutStudentsInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutSchoolInput>;
}
export declare class SchoolCreateInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutSchoolInput>;
    students?: InstanceType<typeof UserCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolGroupByArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
    orderBy?: Array<SchoolOrderByWithAggregationInput>;
    by: Array<keyof typeof SchoolScalarFieldEnum>;
    having?: InstanceType<typeof SchoolScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SchoolCountAggregateInput>;
    _avg?: InstanceType<typeof SchoolAvgAggregateInput>;
    _sum?: InstanceType<typeof SchoolSumAggregateInput>;
    _min?: InstanceType<typeof SchoolMinAggregateInput>;
    _max?: InstanceType<typeof SchoolMaxAggregateInput>;
}
export declare class SchoolGroupBy {
    id: number;
    name: string;
    addressId: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof SchoolCountAggregate>;
    _avg?: InstanceType<typeof SchoolAvgAggregate>;
    _sum?: InstanceType<typeof SchoolSumAggregate>;
    _min?: InstanceType<typeof SchoolMinAggregate>;
    _max?: InstanceType<typeof SchoolMaxAggregate>;
}
export declare class SchoolMaxAggregateInput {
    id?: true;
    name?: true;
    addressId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class SchoolMaxAggregate {
    id?: number;
    name?: string;
    addressId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class SchoolMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class SchoolMinAggregateInput {
    id?: true;
    name?: true;
    addressId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class SchoolMinAggregate {
    id?: number;
    name?: string;
    addressId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class SchoolMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class SchoolNullableRelationFilter {
    is?: InstanceType<typeof SchoolWhereInput>;
    isNot?: InstanceType<typeof SchoolWhereInput>;
}
export declare class SchoolOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof SchoolCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof SchoolAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof SchoolMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof SchoolMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof SchoolSumOrderByAggregateInput>;
}
export declare class SchoolOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    address?: InstanceType<typeof AddressOrderByWithRelationInput>;
    students?: InstanceType<typeof UserOrderByRelationAggregateInput>;
}
export declare class SchoolScalarWhereWithAggregatesInput {
    AND?: Array<SchoolScalarWhereWithAggregatesInput>;
    OR?: Array<SchoolScalarWhereWithAggregatesInput>;
    NOT?: Array<SchoolScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    addressId?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class SchoolSumAggregateInput {
    id?: true;
    addressId?: true;
}
export declare class SchoolSumAggregate {
    id?: number;
    addressId?: number;
}
export declare class SchoolSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
}
export declare class SchoolUncheckedCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof SchoolCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class SchoolUncheckedCreateWithoutAddressInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    students?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolUncheckedCreateWithoutStudentsInput {
    id?: number;
    name: string;
    addressId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class SchoolUncheckedCreateInput {
    id?: number;
    name: string;
    addressId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    students?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class SchoolUncheckedUpdateOneWithoutAddressNestedInput {
    create?: InstanceType<typeof SchoolCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof SchoolUpsertWithoutAddressInput>;
    disconnect?: InstanceType<typeof SchoolWhereInput>;
    delete?: InstanceType<typeof SchoolWhereInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    update?: InstanceType<typeof SchoolUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class SchoolUncheckedUpdateWithoutAddressInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    students?: InstanceType<typeof UserUncheckedUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUncheckedUpdateWithoutStudentsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class SchoolUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    students?: InstanceType<typeof UserUncheckedUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class SchoolUpdateOneWithoutAddressNestedInput {
    create?: InstanceType<typeof SchoolCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof SchoolUpsertWithoutAddressInput>;
    disconnect?: InstanceType<typeof SchoolWhereInput>;
    delete?: InstanceType<typeof SchoolWhereInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    update?: InstanceType<typeof SchoolUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class SchoolUpdateOneWithoutStudentsNestedInput {
    create?: InstanceType<typeof SchoolCreateWithoutStudentsInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutStudentsInput>;
    upsert?: InstanceType<typeof SchoolUpsertWithoutStudentsInput>;
    disconnect?: InstanceType<typeof SchoolWhereInput>;
    delete?: InstanceType<typeof SchoolWhereInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    update?: InstanceType<typeof SchoolUpdateToOneWithWhereWithoutStudentsInput>;
}
export declare class SchoolUpdateToOneWithWhereWithoutAddressInput {
    where?: InstanceType<typeof SchoolWhereInput>;
    data: InstanceType<typeof SchoolUpdateWithoutAddressInput>;
}
export declare class SchoolUpdateToOneWithWhereWithoutStudentsInput {
    where?: InstanceType<typeof SchoolWhereInput>;
    data: InstanceType<typeof SchoolUpdateWithoutStudentsInput>;
}
export declare class SchoolUpdateWithoutAddressInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    students?: InstanceType<typeof UserUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUpdateWithoutStudentsInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutSchoolNestedInput>;
}
export declare class SchoolUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutSchoolNestedInput>;
    students?: InstanceType<typeof UserUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUpsertWithoutAddressInput {
    update: InstanceType<typeof SchoolUpdateWithoutAddressInput>;
    create: InstanceType<typeof SchoolCreateWithoutAddressInput>;
    where?: InstanceType<typeof SchoolWhereInput>;
}
export declare class SchoolUpsertWithoutStudentsInput {
    update: InstanceType<typeof SchoolUpdateWithoutStudentsInput>;
    create: InstanceType<typeof SchoolCreateWithoutStudentsInput>;
    where?: InstanceType<typeof SchoolWhereInput>;
}
export declare class SchoolWhereUniqueInput {
    id?: number;
    addressId?: number;
    AND?: Array<SchoolWhereInput>;
    OR?: Array<SchoolWhereInput>;
    NOT?: Array<SchoolWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
    students?: InstanceType<typeof UserListRelationFilter>;
}
export declare class SchoolWhereInput {
    AND?: Array<SchoolWhereInput>;
    OR?: Array<SchoolWhereInput>;
    NOT?: Array<SchoolWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    addressId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
    students?: InstanceType<typeof UserListRelationFilter>;
}
export declare class School {
    id: number;
    name: string;
    addressId: number;
    createdAt: Date;
    updatedAt: Date;
    address?: InstanceType<typeof Address>;
    students?: Array<User>;
    _count?: InstanceType<typeof SchoolCount>;
}
export declare class UpdateManySchoolArgs {
    data: InstanceType<typeof SchoolUpdateManyMutationInput>;
    where?: InstanceType<typeof SchoolWhereInput>;
}
export declare class UpdateOneSchoolArgs {
    data: InstanceType<typeof SchoolUpdateInput>;
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class UpsertOneSchoolArgs {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    create: InstanceType<typeof SchoolCreateInput>;
    update: InstanceType<typeof SchoolUpdateInput>;
}
export declare class AggregateSession {
    _count?: InstanceType<typeof SessionCountAggregate>;
    _avg?: InstanceType<typeof SessionAvgAggregate>;
    _sum?: InstanceType<typeof SessionSumAggregate>;
    _min?: InstanceType<typeof SessionMinAggregate>;
    _max?: InstanceType<typeof SessionMaxAggregate>;
}
export declare class CreateManySessionArgs {
    data: Array<SessionCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneSessionArgs {
    data: InstanceType<typeof SessionCreateInput>;
}
export declare class DeleteManySessionArgs {
    where?: InstanceType<typeof SessionWhereInput>;
}
export declare class DeleteOneSessionArgs {
    where: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
}
export declare class FindFirstSessionOrThrowArgs {
    where?: InstanceType<typeof SessionWhereInput>;
    orderBy?: Array<SessionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SessionScalarFieldEnum>;
}
export declare class FindFirstSessionArgs {
    where?: InstanceType<typeof SessionWhereInput>;
    orderBy?: Array<SessionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SessionScalarFieldEnum>;
}
export declare class FindManySessionArgs {
    where?: InstanceType<typeof SessionWhereInput>;
    orderBy?: Array<SessionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SessionScalarFieldEnum>;
}
export declare class FindUniqueSessionOrThrowArgs {
    where: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
}
export declare class FindUniqueSessionArgs {
    where: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
}
export declare class SessionAggregateArgs {
    where?: InstanceType<typeof SessionWhereInput>;
    orderBy?: Array<SessionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SessionCountAggregateInput>;
    _avg?: InstanceType<typeof SessionAvgAggregateInput>;
    _sum?: InstanceType<typeof SessionSumAggregateInput>;
    _min?: InstanceType<typeof SessionMinAggregateInput>;
    _max?: InstanceType<typeof SessionMaxAggregateInput>;
}
export declare class SessionAvgAggregateInput {
    id?: true;
    ipAddress?: true;
}
export declare class SessionAvgAggregate {
    id?: number;
    ipAddress?: number;
}
export declare class SessionAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    ipAddress?: keyof typeof SortOrder;
}
export declare class SessionCountAggregateInput {
    id?: true;
    token?: true;
    expiresAt?: true;
    createdAt?: true;
    userId?: true;
    device?: true;
    ipAddress?: true;
    _all?: true;
}
export declare class SessionCountAggregate {
    id: number;
    token: number;
    expiresAt: number;
    createdAt: number;
    userId: number;
    device: number;
    ipAddress: number;
    _all: number;
}
export declare class SessionCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    token?: keyof typeof SortOrder;
    expiresAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    device?: keyof typeof SortOrder;
    ipAddress?: keyof typeof SortOrder;
}
export declare class SessionCreateManyUserInputEnvelope {
    data: Array<SessionCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class SessionCreateManyUserInput {
    id?: number;
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    device: string;
    ipAddress: number;
}
export declare class SessionCreateManyInput {
    id?: number;
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    userId: string;
    device: string;
    ipAddress: number;
}
export declare class SessionCreateNestedManyWithoutUserInput {
    create?: Array<SessionCreateWithoutUserInput>;
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
}
export declare class SessionCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    create: InstanceType<typeof SessionCreateWithoutUserInput>;
}
export declare class SessionCreateWithoutUserInput {
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    device: string;
    ipAddress: number;
}
export declare class SessionCreateInput {
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    device: string;
    ipAddress: number;
    user: InstanceType<typeof UserCreateNestedOneWithoutSessionsInput>;
}
export declare class SessionGroupByArgs {
    where?: InstanceType<typeof SessionWhereInput>;
    orderBy?: Array<SessionOrderByWithAggregationInput>;
    by: Array<keyof typeof SessionScalarFieldEnum>;
    having?: InstanceType<typeof SessionScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SessionCountAggregateInput>;
    _avg?: InstanceType<typeof SessionAvgAggregateInput>;
    _sum?: InstanceType<typeof SessionSumAggregateInput>;
    _min?: InstanceType<typeof SessionMinAggregateInput>;
    _max?: InstanceType<typeof SessionMaxAggregateInput>;
}
export declare class SessionGroupBy {
    id: number;
    token: string;
    expiresAt: Date | string;
    createdAt: Date | string;
    userId: string;
    device: string;
    ipAddress: number;
    _count?: InstanceType<typeof SessionCountAggregate>;
    _avg?: InstanceType<typeof SessionAvgAggregate>;
    _sum?: InstanceType<typeof SessionSumAggregate>;
    _min?: InstanceType<typeof SessionMinAggregate>;
    _max?: InstanceType<typeof SessionMaxAggregate>;
}
export declare class SessionListRelationFilter {
    every?: InstanceType<typeof SessionWhereInput>;
    some?: InstanceType<typeof SessionWhereInput>;
    none?: InstanceType<typeof SessionWhereInput>;
}
export declare class SessionMaxAggregateInput {
    id?: true;
    token?: true;
    expiresAt?: true;
    createdAt?: true;
    userId?: true;
    device?: true;
    ipAddress?: true;
}
export declare class SessionMaxAggregate {
    id?: number;
    token?: string;
    expiresAt?: Date | string;
    createdAt?: Date | string;
    userId?: string;
    device?: string;
    ipAddress?: number;
}
export declare class SessionMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    token?: keyof typeof SortOrder;
    expiresAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    device?: keyof typeof SortOrder;
    ipAddress?: keyof typeof SortOrder;
}
export declare class SessionMinAggregateInput {
    id?: true;
    token?: true;
    expiresAt?: true;
    createdAt?: true;
    userId?: true;
    device?: true;
    ipAddress?: true;
}
export declare class SessionMinAggregate {
    id?: number;
    token?: string;
    expiresAt?: Date | string;
    createdAt?: Date | string;
    userId?: string;
    device?: string;
    ipAddress?: number;
}
export declare class SessionMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    token?: keyof typeof SortOrder;
    expiresAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    device?: keyof typeof SortOrder;
    ipAddress?: keyof typeof SortOrder;
}
export declare class SessionOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class SessionOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    token?: keyof typeof SortOrder;
    expiresAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    device?: keyof typeof SortOrder;
    ipAddress?: keyof typeof SortOrder;
    _count?: InstanceType<typeof SessionCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof SessionAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof SessionMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof SessionMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof SessionSumOrderByAggregateInput>;
}
export declare class SessionOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    token?: keyof typeof SortOrder;
    expiresAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    device?: keyof typeof SortOrder;
    ipAddress?: keyof typeof SortOrder;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class SessionScalarWhereWithAggregatesInput {
    AND?: Array<SessionScalarWhereWithAggregatesInput>;
    OR?: Array<SessionScalarWhereWithAggregatesInput>;
    NOT?: Array<SessionScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    token?: InstanceType<typeof StringWithAggregatesFilter>;
    expiresAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    device?: InstanceType<typeof StringWithAggregatesFilter>;
    ipAddress?: InstanceType<typeof FloatWithAggregatesFilter>;
}
export declare class SessionScalarWhereInput {
    AND?: Array<SessionScalarWhereInput>;
    OR?: Array<SessionScalarWhereInput>;
    NOT?: Array<SessionScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    token?: InstanceType<typeof StringFilter>;
    expiresAt?: InstanceType<typeof DateTimeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringFilter>;
    device?: InstanceType<typeof StringFilter>;
    ipAddress?: InstanceType<typeof FloatFilter>;
}
export declare class SessionSumAggregateInput {
    id?: true;
    ipAddress?: true;
}
export declare class SessionSumAggregate {
    id?: number;
    ipAddress?: number;
}
export declare class SessionSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    ipAddress?: keyof typeof SortOrder;
}
export declare class SessionUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<SessionCreateWithoutUserInput>;
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
}
export declare class SessionUncheckedCreateWithoutUserInput {
    id?: number;
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    device: string;
    ipAddress: number;
}
export declare class SessionUncheckedCreateInput {
    id?: number;
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    userId: string;
    device: string;
    ipAddress: number;
}
export declare class SessionUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<SessionCreateWithoutUserInput>;
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
    upsert?: Array<SessionUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    disconnect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    delete?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    connect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    update?: Array<SessionUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<SessionUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<SessionScalarWhereInput>;
}
export declare class SessionUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    device?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ipAddress?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
}
export declare class SessionUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    device?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ipAddress?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
}
export declare class SessionUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    device?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ipAddress?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
}
export declare class SessionUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    device?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ipAddress?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
}
export declare class SessionUpdateManyMutationInput {
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    device?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ipAddress?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
}
export declare class SessionUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof SessionScalarWhereInput>;
    data: InstanceType<typeof SessionUpdateManyMutationInput>;
}
export declare class SessionUpdateManyWithoutUserNestedInput {
    create?: Array<SessionCreateWithoutUserInput>;
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
    upsert?: Array<SessionUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    disconnect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    delete?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    connect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    update?: Array<SessionUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<SessionUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<SessionScalarWhereInput>;
}
export declare class SessionUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    data: InstanceType<typeof SessionUpdateWithoutUserInput>;
}
export declare class SessionUpdateWithoutUserInput {
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    device?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ipAddress?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
}
export declare class SessionUpdateInput {
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    device?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ipAddress?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutSessionsNestedInput>;
}
export declare class SessionUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    update: InstanceType<typeof SessionUpdateWithoutUserInput>;
    create: InstanceType<typeof SessionCreateWithoutUserInput>;
}
export declare class SessionWhereUniqueInput {
    id?: number;
    token?: string;
    AND?: Array<SessionWhereInput>;
    OR?: Array<SessionWhereInput>;
    NOT?: Array<SessionWhereInput>;
    expiresAt?: InstanceType<typeof DateTimeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringFilter>;
    device?: InstanceType<typeof StringFilter>;
    ipAddress?: InstanceType<typeof FloatFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class SessionWhereInput {
    AND?: Array<SessionWhereInput>;
    OR?: Array<SessionWhereInput>;
    NOT?: Array<SessionWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    token?: InstanceType<typeof StringFilter>;
    expiresAt?: InstanceType<typeof DateTimeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringFilter>;
    device?: InstanceType<typeof StringFilter>;
    ipAddress?: InstanceType<typeof FloatFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class Session {
    id: number;
    token: string;
    expiresAt: Date;
    createdAt: Date;
    userId: string;
    device: string;
    ipAddress: number;
    user?: InstanceType<typeof User>;
}
export declare class UpdateManySessionArgs {
    data: InstanceType<typeof SessionUpdateManyMutationInput>;
    where?: InstanceType<typeof SessionWhereInput>;
}
export declare class UpdateOneSessionArgs {
    data: InstanceType<typeof SessionUpdateInput>;
    where: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
}
export declare class UpsertOneSessionArgs {
    where: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    create: InstanceType<typeof SessionCreateInput>;
    update: InstanceType<typeof SessionUpdateInput>;
}
export declare class AggregateShipping {
    _count?: InstanceType<typeof ShippingCountAggregate>;
    _avg?: InstanceType<typeof ShippingAvgAggregate>;
    _sum?: InstanceType<typeof ShippingSumAggregate>;
    _min?: InstanceType<typeof ShippingMinAggregate>;
    _max?: InstanceType<typeof ShippingMaxAggregate>;
}
export declare class CreateManyShippingArgs {
    data: Array<ShippingCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneShippingArgs {
    data: InstanceType<typeof ShippingCreateInput>;
}
export declare class DeleteManyShippingArgs {
    where?: InstanceType<typeof ShippingWhereInput>;
}
export declare class DeleteOneShippingArgs {
    where: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
export declare class FindFirstShippingOrThrowArgs {
    where?: InstanceType<typeof ShippingWhereInput>;
    orderBy?: Array<ShippingOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ShippingScalarFieldEnum>;
}
export declare class FindFirstShippingArgs {
    where?: InstanceType<typeof ShippingWhereInput>;
    orderBy?: Array<ShippingOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ShippingScalarFieldEnum>;
}
export declare class FindManyShippingArgs {
    where?: InstanceType<typeof ShippingWhereInput>;
    orderBy?: Array<ShippingOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ShippingScalarFieldEnum>;
}
export declare class FindUniqueShippingOrThrowArgs {
    where: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
export declare class FindUniqueShippingArgs {
    where: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
export declare class ShippingAggregateArgs {
    where?: InstanceType<typeof ShippingWhereInput>;
    orderBy?: Array<ShippingOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ShippingCountAggregateInput>;
    _avg?: InstanceType<typeof ShippingAvgAggregateInput>;
    _sum?: InstanceType<typeof ShippingSumAggregateInput>;
    _min?: InstanceType<typeof ShippingMinAggregateInput>;
    _max?: InstanceType<typeof ShippingMaxAggregateInput>;
}
export declare class ShippingAvgAggregateInput {
    id?: true;
    addressId?: true;
    orderId?: true;
}
export declare class ShippingAvgAggregate {
    id?: number;
    addressId?: number;
    orderId?: number;
}
export declare class ShippingAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
}
export declare class ShippingCountAggregateInput {
    id?: true;
    logisticName?: true;
    deliveryDate?: true;
    shippingStatus?: true;
    addressId?: true;
    courier?: true;
    estimatedTime?: true;
    trackingNo?: true;
    orderId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class ShippingCountAggregate {
    id: number;
    logisticName: number;
    deliveryDate: number;
    shippingStatus: number;
    addressId: number;
    courier: number;
    estimatedTime: number;
    trackingNo: number;
    orderId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class ShippingCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    logisticName?: keyof typeof SortOrder;
    deliveryDate?: keyof typeof SortOrder;
    shippingStatus?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    courier?: keyof typeof SortOrder;
    estimatedTime?: keyof typeof SortOrder;
    trackingNo?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ShippingCreateManyInput {
    id?: number;
    logisticName: string;
    deliveryDate?: Date | string;
    shippingStatus: keyof typeof ShippingStatus;
    addressId: number;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    orderId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ShippingCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof ShippingCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof ShippingCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
export declare class ShippingCreateNestedOneWithoutOrderInput {
    create?: InstanceType<typeof ShippingCreateWithoutOrderInput>;
    connectOrCreate?: InstanceType<typeof ShippingCreateOrConnectWithoutOrderInput>;
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
export declare class ShippingCreateOrConnectWithoutAddressInput {
    where: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    create: InstanceType<typeof ShippingCreateWithoutAddressInput>;
}
export declare class ShippingCreateOrConnectWithoutOrderInput {
    where: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    create: InstanceType<typeof ShippingCreateWithoutOrderInput>;
}
export declare class ShippingCreateWithoutAddressInput {
    logisticName: string;
    deliveryDate?: Date | string;
    shippingStatus: keyof typeof ShippingStatus;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: InstanceType<typeof OrderCreateNestedOneWithoutShippingInput>;
}
export declare class ShippingCreateWithoutOrderInput {
    logisticName: string;
    deliveryDate?: Date | string;
    shippingStatus: keyof typeof ShippingStatus;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutShippingInput>;
}
export declare class ShippingCreateInput {
    logisticName: string;
    deliveryDate?: Date | string;
    shippingStatus: keyof typeof ShippingStatus;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutShippingInput>;
    order: InstanceType<typeof OrderCreateNestedOneWithoutShippingInput>;
}
export declare class ShippingGroupByArgs {
    where?: InstanceType<typeof ShippingWhereInput>;
    orderBy?: Array<ShippingOrderByWithAggregationInput>;
    by: Array<keyof typeof ShippingScalarFieldEnum>;
    having?: InstanceType<typeof ShippingScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ShippingCountAggregateInput>;
    _avg?: InstanceType<typeof ShippingAvgAggregateInput>;
    _sum?: InstanceType<typeof ShippingSumAggregateInput>;
    _min?: InstanceType<typeof ShippingMinAggregateInput>;
    _max?: InstanceType<typeof ShippingMaxAggregateInput>;
}
export declare class ShippingGroupBy {
    id: number;
    logisticName: string;
    deliveryDate?: Date | string;
    shippingStatus: keyof typeof ShippingStatus;
    addressId: number;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    orderId: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof ShippingCountAggregate>;
    _avg?: InstanceType<typeof ShippingAvgAggregate>;
    _sum?: InstanceType<typeof ShippingSumAggregate>;
    _min?: InstanceType<typeof ShippingMinAggregate>;
    _max?: InstanceType<typeof ShippingMaxAggregate>;
}
export declare class ShippingMaxAggregateInput {
    id?: true;
    logisticName?: true;
    deliveryDate?: true;
    shippingStatus?: true;
    addressId?: true;
    courier?: true;
    estimatedTime?: true;
    trackingNo?: true;
    orderId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ShippingMaxAggregate {
    id?: number;
    logisticName?: string;
    deliveryDate?: Date | string;
    shippingStatus?: keyof typeof ShippingStatus;
    addressId?: number;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    orderId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ShippingMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    logisticName?: keyof typeof SortOrder;
    deliveryDate?: keyof typeof SortOrder;
    shippingStatus?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    courier?: keyof typeof SortOrder;
    estimatedTime?: keyof typeof SortOrder;
    trackingNo?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ShippingMinAggregateInput {
    id?: true;
    logisticName?: true;
    deliveryDate?: true;
    shippingStatus?: true;
    addressId?: true;
    courier?: true;
    estimatedTime?: true;
    trackingNo?: true;
    orderId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ShippingMinAggregate {
    id?: number;
    logisticName?: string;
    deliveryDate?: Date | string;
    shippingStatus?: keyof typeof ShippingStatus;
    addressId?: number;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    orderId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ShippingMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    logisticName?: keyof typeof SortOrder;
    deliveryDate?: keyof typeof SortOrder;
    shippingStatus?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    courier?: keyof typeof SortOrder;
    estimatedTime?: keyof typeof SortOrder;
    trackingNo?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ShippingNullableRelationFilter {
    is?: InstanceType<typeof ShippingWhereInput>;
    isNot?: InstanceType<typeof ShippingWhereInput>;
}
export declare class ShippingOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    logisticName?: keyof typeof SortOrder;
    deliveryDate?: InstanceType<typeof SortOrderInput>;
    shippingStatus?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    courier?: InstanceType<typeof SortOrderInput>;
    estimatedTime?: InstanceType<typeof SortOrderInput>;
    trackingNo?: InstanceType<typeof SortOrderInput>;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ShippingCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ShippingAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ShippingMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ShippingMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ShippingSumOrderByAggregateInput>;
}
export declare class ShippingOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    logisticName?: keyof typeof SortOrder;
    deliveryDate?: InstanceType<typeof SortOrderInput>;
    shippingStatus?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    courier?: InstanceType<typeof SortOrderInput>;
    estimatedTime?: InstanceType<typeof SortOrderInput>;
    trackingNo?: InstanceType<typeof SortOrderInput>;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    address?: InstanceType<typeof AddressOrderByWithRelationInput>;
    order?: InstanceType<typeof OrderOrderByWithRelationInput>;
}
export declare class ShippingScalarWhereWithAggregatesInput {
    AND?: Array<ShippingScalarWhereWithAggregatesInput>;
    OR?: Array<ShippingScalarWhereWithAggregatesInput>;
    NOT?: Array<ShippingScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    logisticName?: InstanceType<typeof StringWithAggregatesFilter>;
    deliveryDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusWithAggregatesFilter>;
    addressId?: InstanceType<typeof IntWithAggregatesFilter>;
    courier?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    estimatedTime?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    trackingNo?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    orderId?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class ShippingSumAggregateInput {
    id?: true;
    addressId?: true;
    orderId?: true;
}
export declare class ShippingSumAggregate {
    id?: number;
    addressId?: number;
    orderId?: number;
}
export declare class ShippingSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
}
export declare class ShippingUncheckedCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof ShippingCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof ShippingCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
export declare class ShippingUncheckedCreateNestedOneWithoutOrderInput {
    create?: InstanceType<typeof ShippingCreateWithoutOrderInput>;
    connectOrCreate?: InstanceType<typeof ShippingCreateOrConnectWithoutOrderInput>;
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
export declare class ShippingUncheckedCreateWithoutAddressInput {
    id?: number;
    logisticName: string;
    deliveryDate?: Date | string;
    shippingStatus: keyof typeof ShippingStatus;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    orderId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ShippingUncheckedCreateWithoutOrderInput {
    id?: number;
    logisticName: string;
    deliveryDate?: Date | string;
    shippingStatus: keyof typeof ShippingStatus;
    addressId: number;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ShippingUncheckedCreateInput {
    id?: number;
    logisticName: string;
    deliveryDate?: Date | string;
    shippingStatus: keyof typeof ShippingStatus;
    addressId: number;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    orderId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ShippingUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    logisticName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deliveryDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    courier?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    estimatedTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    trackingNo?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ShippingUncheckedUpdateOneWithoutAddressNestedInput {
    create?: InstanceType<typeof ShippingCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof ShippingCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof ShippingUpsertWithoutAddressInput>;
    disconnect?: InstanceType<typeof ShippingWhereInput>;
    delete?: InstanceType<typeof ShippingWhereInput>;
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    update?: InstanceType<typeof ShippingUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class ShippingUncheckedUpdateOneWithoutOrderNestedInput {
    create?: InstanceType<typeof ShippingCreateWithoutOrderInput>;
    connectOrCreate?: InstanceType<typeof ShippingCreateOrConnectWithoutOrderInput>;
    upsert?: InstanceType<typeof ShippingUpsertWithoutOrderInput>;
    disconnect?: InstanceType<typeof ShippingWhereInput>;
    delete?: InstanceType<typeof ShippingWhereInput>;
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    update?: InstanceType<typeof ShippingUpdateToOneWithWhereWithoutOrderInput>;
}
export declare class ShippingUncheckedUpdateWithoutAddressInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    logisticName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deliveryDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFieldUpdateOperationsInput>;
    courier?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    estimatedTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    trackingNo?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ShippingUncheckedUpdateWithoutOrderInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    logisticName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deliveryDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    courier?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    estimatedTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    trackingNo?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ShippingUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    logisticName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deliveryDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    courier?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    estimatedTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    trackingNo?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ShippingUpdateManyMutationInput {
    logisticName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deliveryDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFieldUpdateOperationsInput>;
    courier?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    estimatedTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    trackingNo?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ShippingUpdateOneWithoutAddressNestedInput {
    create?: InstanceType<typeof ShippingCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof ShippingCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof ShippingUpsertWithoutAddressInput>;
    disconnect?: InstanceType<typeof ShippingWhereInput>;
    delete?: InstanceType<typeof ShippingWhereInput>;
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    update?: InstanceType<typeof ShippingUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class ShippingUpdateOneWithoutOrderNestedInput {
    create?: InstanceType<typeof ShippingCreateWithoutOrderInput>;
    connectOrCreate?: InstanceType<typeof ShippingCreateOrConnectWithoutOrderInput>;
    upsert?: InstanceType<typeof ShippingUpsertWithoutOrderInput>;
    disconnect?: InstanceType<typeof ShippingWhereInput>;
    delete?: InstanceType<typeof ShippingWhereInput>;
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    update?: InstanceType<typeof ShippingUpdateToOneWithWhereWithoutOrderInput>;
}
export declare class ShippingUpdateToOneWithWhereWithoutAddressInput {
    where?: InstanceType<typeof ShippingWhereInput>;
    data: InstanceType<typeof ShippingUpdateWithoutAddressInput>;
}
export declare class ShippingUpdateToOneWithWhereWithoutOrderInput {
    where?: InstanceType<typeof ShippingWhereInput>;
    data: InstanceType<typeof ShippingUpdateWithoutOrderInput>;
}
export declare class ShippingUpdateWithoutAddressInput {
    logisticName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deliveryDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFieldUpdateOperationsInput>;
    courier?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    estimatedTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    trackingNo?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    order?: InstanceType<typeof OrderUpdateOneRequiredWithoutShippingNestedInput>;
}
export declare class ShippingUpdateWithoutOrderInput {
    logisticName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deliveryDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFieldUpdateOperationsInput>;
    courier?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    estimatedTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    trackingNo?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutShippingNestedInput>;
}
export declare class ShippingUpdateInput {
    logisticName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deliveryDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFieldUpdateOperationsInput>;
    courier?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    estimatedTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    trackingNo?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutShippingNestedInput>;
    order?: InstanceType<typeof OrderUpdateOneRequiredWithoutShippingNestedInput>;
}
export declare class ShippingUpsertWithoutAddressInput {
    update: InstanceType<typeof ShippingUpdateWithoutAddressInput>;
    create: InstanceType<typeof ShippingCreateWithoutAddressInput>;
    where?: InstanceType<typeof ShippingWhereInput>;
}
export declare class ShippingUpsertWithoutOrderInput {
    update: InstanceType<typeof ShippingUpdateWithoutOrderInput>;
    create: InstanceType<typeof ShippingCreateWithoutOrderInput>;
    where?: InstanceType<typeof ShippingWhereInput>;
}
export declare class ShippingWhereUniqueInput {
    id?: number;
    addressId?: number;
    orderId?: number;
    AND?: Array<ShippingWhereInput>;
    OR?: Array<ShippingWhereInput>;
    NOT?: Array<ShippingWhereInput>;
    logisticName?: InstanceType<typeof StringFilter>;
    deliveryDate?: InstanceType<typeof DateTimeNullableFilter>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFilter>;
    courier?: InstanceType<typeof StringNullableFilter>;
    estimatedTime?: InstanceType<typeof StringNullableFilter>;
    trackingNo?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
    order?: InstanceType<typeof OrderRelationFilter>;
}
export declare class ShippingWhereInput {
    AND?: Array<ShippingWhereInput>;
    OR?: Array<ShippingWhereInput>;
    NOT?: Array<ShippingWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    logisticName?: InstanceType<typeof StringFilter>;
    deliveryDate?: InstanceType<typeof DateTimeNullableFilter>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFilter>;
    addressId?: InstanceType<typeof IntFilter>;
    courier?: InstanceType<typeof StringNullableFilter>;
    estimatedTime?: InstanceType<typeof StringNullableFilter>;
    trackingNo?: InstanceType<typeof StringNullableFilter>;
    orderId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
    order?: InstanceType<typeof OrderRelationFilter>;
}
export declare class Shipping {
    id: number;
    logisticName: string;
    deliveryDate: Date | null;
    shippingStatus: keyof typeof ShippingStatus;
    addressId: number;
    courier: string | null;
    estimatedTime: string | null;
    trackingNo: string | null;
    orderId: number;
    createdAt: Date;
    updatedAt: Date;
    address?: InstanceType<typeof Address>;
    order?: InstanceType<typeof Order>;
}
export declare class UpdateManyShippingArgs {
    data: InstanceType<typeof ShippingUpdateManyMutationInput>;
    where?: InstanceType<typeof ShippingWhereInput>;
}
export declare class UpdateOneShippingArgs {
    data: InstanceType<typeof ShippingUpdateInput>;
    where: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
export declare class UpsertOneShippingArgs {
    where: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    create: InstanceType<typeof ShippingCreateInput>;
    update: InstanceType<typeof ShippingUpdateInput>;
}
export declare class AggregateTransaction {
    _count?: InstanceType<typeof TransactionCountAggregate>;
    _avg?: InstanceType<typeof TransactionAvgAggregate>;
    _sum?: InstanceType<typeof TransactionSumAggregate>;
    _min?: InstanceType<typeof TransactionMinAggregate>;
    _max?: InstanceType<typeof TransactionMaxAggregate>;
}
export declare class CreateManyTransactionArgs {
    data: Array<TransactionCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneTransactionArgs {
    data: InstanceType<typeof TransactionCreateInput>;
}
export declare class DeleteManyTransactionArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
}
export declare class DeleteOneTransactionArgs {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
}
export declare class FindFirstTransactionOrThrowArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
    orderBy?: Array<TransactionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof TransactionScalarFieldEnum>;
}
export declare class FindFirstTransactionArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
    orderBy?: Array<TransactionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof TransactionScalarFieldEnum>;
}
export declare class FindManyTransactionArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
    orderBy?: Array<TransactionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof TransactionScalarFieldEnum>;
}
export declare class FindUniqueTransactionOrThrowArgs {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
}
export declare class FindUniqueTransactionArgs {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
}
export declare class TransactionAggregateArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
    orderBy?: Array<TransactionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof TransactionCountAggregateInput>;
    _avg?: InstanceType<typeof TransactionAvgAggregateInput>;
    _sum?: InstanceType<typeof TransactionSumAggregateInput>;
    _min?: InstanceType<typeof TransactionMinAggregateInput>;
    _max?: InstanceType<typeof TransactionMaxAggregateInput>;
}
export declare class TransactionAvgAggregateInput {
    id?: true;
    amount?: true;
    currentBalance?: true;
    accountId?: true;
}
export declare class TransactionAvgAggregate {
    id?: number;
    amount?: number;
    currentBalance?: number;
    accountId?: number;
}
export declare class TransactionAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class TransactionCountAggregateInput {
    id?: true;
    amount?: true;
    status?: true;
    transactionType?: true;
    transactionCategory?: true;
    currentBalance?: true;
    userId?: true;
    accountId?: true;
    createdAt?: true;
    _all?: true;
}
export declare class TransactionCountAggregate {
    id: number;
    amount: number;
    status: number;
    transactionType: number;
    transactionCategory: number;
    currentBalance: number;
    userId: number;
    accountId: number;
    createdAt: number;
    _all: number;
}
export declare class TransactionCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    transactionType?: keyof typeof SortOrder;
    transactionCategory?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class TransactionCreateManyAccountInputEnvelope {
    data: Array<TransactionCreateManyAccountInput>;
    skipDuplicates?: boolean;
}
export declare class TransactionCreateManyAccountInput {
    id?: number;
    amount: number;
    status: keyof typeof TransactionStatus;
    transactionType: keyof typeof TransactionType;
    transactionCategory: keyof typeof TransactionCategory;
    currentBalance: number;
    userId: string;
    createdAt?: Date | string;
}
export declare class TransactionCreateManyUserInputEnvelope {
    data: Array<TransactionCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class TransactionCreateManyUserInput {
    id?: number;
    amount: number;
    status: keyof typeof TransactionStatus;
    transactionType: keyof typeof TransactionType;
    transactionCategory: keyof typeof TransactionCategory;
    currentBalance: number;
    accountId: number;
    createdAt?: Date | string;
}
export declare class TransactionCreateManyInput {
    id?: number;
    amount: number;
    status: keyof typeof TransactionStatus;
    transactionType: keyof typeof TransactionType;
    transactionCategory: keyof typeof TransactionCategory;
    currentBalance: number;
    userId: string;
    accountId: number;
    createdAt?: Date | string;
}
export declare class TransactionCreateNestedManyWithoutAccountInput {
    create?: Array<TransactionCreateWithoutAccountInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutAccountInput>;
    createMany?: InstanceType<typeof TransactionCreateManyAccountInputEnvelope>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
}
export declare class TransactionCreateNestedManyWithoutUserInput {
    create?: Array<TransactionCreateWithoutUserInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof TransactionCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
}
export declare class TransactionCreateNestedOneWithoutPaymentInput {
    create?: InstanceType<typeof TransactionCreateWithoutPaymentInput>;
    connectOrCreate?: InstanceType<typeof TransactionCreateOrConnectWithoutPaymentInput>;
    connect?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
}
export declare class TransactionCreateOrConnectWithoutAccountInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
    create: InstanceType<typeof TransactionCreateWithoutAccountInput>;
}
export declare class TransactionCreateOrConnectWithoutPaymentInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
    create: InstanceType<typeof TransactionCreateWithoutPaymentInput>;
}
export declare class TransactionCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
    create: InstanceType<typeof TransactionCreateWithoutUserInput>;
}
export declare class TransactionCreateWithoutAccountInput {
    amount: number;
    status: keyof typeof TransactionStatus;
    transactionType: keyof typeof TransactionType;
    transactionCategory: keyof typeof TransactionCategory;
    currentBalance: number;
    createdAt?: Date | string;
    User: InstanceType<typeof UserCreateNestedOneWithoutTransactionsInput>;
    payment?: InstanceType<typeof PaymentCreateNestedOneWithoutTransactionInput>;
}
export declare class TransactionCreateWithoutPaymentInput {
    amount: number;
    status: keyof typeof TransactionStatus;
    transactionType: keyof typeof TransactionType;
    transactionCategory: keyof typeof TransactionCategory;
    currentBalance: number;
    createdAt?: Date | string;
    User: InstanceType<typeof UserCreateNestedOneWithoutTransactionsInput>;
    account: InstanceType<typeof AccountCreateNestedOneWithoutTransactionsInput>;
}
export declare class TransactionCreateWithoutUserInput {
    amount: number;
    status: keyof typeof TransactionStatus;
    transactionType: keyof typeof TransactionType;
    transactionCategory: keyof typeof TransactionCategory;
    currentBalance: number;
    createdAt?: Date | string;
    account: InstanceType<typeof AccountCreateNestedOneWithoutTransactionsInput>;
    payment?: InstanceType<typeof PaymentCreateNestedOneWithoutTransactionInput>;
}
export declare class TransactionCreateInput {
    amount: number;
    status: keyof typeof TransactionStatus;
    transactionType: keyof typeof TransactionType;
    transactionCategory: keyof typeof TransactionCategory;
    currentBalance: number;
    createdAt?: Date | string;
    User: InstanceType<typeof UserCreateNestedOneWithoutTransactionsInput>;
    account: InstanceType<typeof AccountCreateNestedOneWithoutTransactionsInput>;
    payment?: InstanceType<typeof PaymentCreateNestedOneWithoutTransactionInput>;
}
export declare class TransactionGroupByArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
    orderBy?: Array<TransactionOrderByWithAggregationInput>;
    by: Array<keyof typeof TransactionScalarFieldEnum>;
    having?: InstanceType<typeof TransactionScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof TransactionCountAggregateInput>;
    _avg?: InstanceType<typeof TransactionAvgAggregateInput>;
    _sum?: InstanceType<typeof TransactionSumAggregateInput>;
    _min?: InstanceType<typeof TransactionMinAggregateInput>;
    _max?: InstanceType<typeof TransactionMaxAggregateInput>;
}
export declare class TransactionGroupBy {
    id: number;
    amount: number;
    status: keyof typeof TransactionStatus;
    transactionType: keyof typeof TransactionType;
    transactionCategory: keyof typeof TransactionCategory;
    currentBalance: number;
    userId: string;
    accountId: number;
    createdAt: Date | string;
    _count?: InstanceType<typeof TransactionCountAggregate>;
    _avg?: InstanceType<typeof TransactionAvgAggregate>;
    _sum?: InstanceType<typeof TransactionSumAggregate>;
    _min?: InstanceType<typeof TransactionMinAggregate>;
    _max?: InstanceType<typeof TransactionMaxAggregate>;
}
export declare class TransactionListRelationFilter {
    every?: InstanceType<typeof TransactionWhereInput>;
    some?: InstanceType<typeof TransactionWhereInput>;
    none?: InstanceType<typeof TransactionWhereInput>;
}
export declare class TransactionMaxAggregateInput {
    id?: true;
    amount?: true;
    status?: true;
    transactionType?: true;
    transactionCategory?: true;
    currentBalance?: true;
    userId?: true;
    accountId?: true;
    createdAt?: true;
}
export declare class TransactionMaxAggregate {
    id?: number;
    amount?: number;
    status?: keyof typeof TransactionStatus;
    transactionType?: keyof typeof TransactionType;
    transactionCategory?: keyof typeof TransactionCategory;
    currentBalance?: number;
    userId?: string;
    accountId?: number;
    createdAt?: Date | string;
}
export declare class TransactionMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    transactionType?: keyof typeof SortOrder;
    transactionCategory?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class TransactionMinAggregateInput {
    id?: true;
    amount?: true;
    status?: true;
    transactionType?: true;
    transactionCategory?: true;
    currentBalance?: true;
    userId?: true;
    accountId?: true;
    createdAt?: true;
}
export declare class TransactionMinAggregate {
    id?: number;
    amount?: number;
    status?: keyof typeof TransactionStatus;
    transactionType?: keyof typeof TransactionType;
    transactionCategory?: keyof typeof TransactionCategory;
    currentBalance?: number;
    userId?: string;
    accountId?: number;
    createdAt?: Date | string;
}
export declare class TransactionMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    transactionType?: keyof typeof SortOrder;
    transactionCategory?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class TransactionOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class TransactionOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    transactionType?: keyof typeof SortOrder;
    transactionCategory?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof TransactionCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof TransactionAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof TransactionMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof TransactionMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof TransactionSumOrderByAggregateInput>;
}
export declare class TransactionOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    transactionType?: keyof typeof SortOrder;
    transactionCategory?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    User?: InstanceType<typeof UserOrderByWithRelationInput>;
    account?: InstanceType<typeof AccountOrderByWithRelationInput>;
    payment?: InstanceType<typeof PaymentOrderByWithRelationInput>;
}
export declare class TransactionRelationFilter {
    is?: InstanceType<typeof TransactionWhereInput>;
    isNot?: InstanceType<typeof TransactionWhereInput>;
}
export declare class TransactionScalarWhereWithAggregatesInput {
    AND?: Array<TransactionScalarWhereWithAggregatesInput>;
    OR?: Array<TransactionScalarWhereWithAggregatesInput>;
    NOT?: Array<TransactionScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    amount?: InstanceType<typeof FloatWithAggregatesFilter>;
    status?: InstanceType<typeof EnumTransactionStatusWithAggregatesFilter>;
    transactionType?: InstanceType<typeof EnumTransactionTypeWithAggregatesFilter>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryWithAggregatesFilter>;
    currentBalance?: InstanceType<typeof FloatWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    accountId?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class TransactionScalarWhereInput {
    AND?: Array<TransactionScalarWhereInput>;
    OR?: Array<TransactionScalarWhereInput>;
    NOT?: Array<TransactionScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    amount?: InstanceType<typeof FloatFilter>;
    status?: InstanceType<typeof EnumTransactionStatusFilter>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFilter>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFilter>;
    currentBalance?: InstanceType<typeof FloatFilter>;
    userId?: InstanceType<typeof StringFilter>;
    accountId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class TransactionSumAggregateInput {
    id?: true;
    amount?: true;
    currentBalance?: true;
    accountId?: true;
}
export declare class TransactionSumAggregate {
    id?: number;
    amount?: number;
    currentBalance?: number;
    accountId?: number;
}
export declare class TransactionSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class TransactionUncheckedCreateNestedManyWithoutAccountInput {
    create?: Array<TransactionCreateWithoutAccountInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutAccountInput>;
    createMany?: InstanceType<typeof TransactionCreateManyAccountInputEnvelope>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
}
export declare class TransactionUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<TransactionCreateWithoutUserInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof TransactionCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
}
export declare class TransactionUncheckedCreateWithoutAccountInput {
    id?: number;
    amount: number;
    status: keyof typeof TransactionStatus;
    transactionType: keyof typeof TransactionType;
    transactionCategory: keyof typeof TransactionCategory;
    currentBalance: number;
    userId: string;
    createdAt?: Date | string;
    payment?: InstanceType<typeof PaymentUncheckedCreateNestedOneWithoutTransactionInput>;
}
export declare class TransactionUncheckedCreateWithoutPaymentInput {
    id?: number;
    amount: number;
    status: keyof typeof TransactionStatus;
    transactionType: keyof typeof TransactionType;
    transactionCategory: keyof typeof TransactionCategory;
    currentBalance: number;
    userId: string;
    accountId: number;
    createdAt?: Date | string;
}
export declare class TransactionUncheckedCreateWithoutUserInput {
    id?: number;
    amount: number;
    status: keyof typeof TransactionStatus;
    transactionType: keyof typeof TransactionType;
    transactionCategory: keyof typeof TransactionCategory;
    currentBalance: number;
    accountId: number;
    createdAt?: Date | string;
    payment?: InstanceType<typeof PaymentUncheckedCreateNestedOneWithoutTransactionInput>;
}
export declare class TransactionUncheckedCreateInput {
    id?: number;
    amount: number;
    status: keyof typeof TransactionStatus;
    transactionType: keyof typeof TransactionType;
    transactionCategory: keyof typeof TransactionCategory;
    currentBalance: number;
    userId: string;
    accountId: number;
    createdAt?: Date | string;
    payment?: InstanceType<typeof PaymentUncheckedCreateNestedOneWithoutTransactionInput>;
}
export declare class TransactionUncheckedUpdateManyWithoutAccountNestedInput {
    create?: Array<TransactionCreateWithoutAccountInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutAccountInput>;
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutAccountInput>;
    createMany?: InstanceType<typeof TransactionCreateManyAccountInputEnvelope>;
    set?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
    disconnect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
    delete?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
    update?: Array<TransactionUpdateWithWhereUniqueWithoutAccountInput>;
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutAccountInput>;
    deleteMany?: Array<TransactionScalarWhereInput>;
}
export declare class TransactionUncheckedUpdateManyWithoutAccountInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<TransactionCreateWithoutUserInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutUserInput>;
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof TransactionCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
    disconnect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
    delete?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
    update?: Array<TransactionUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<TransactionScalarWhereInput>;
}
export declare class TransactionUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUncheckedUpdateWithoutAccountInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    payment?: InstanceType<typeof PaymentUncheckedUpdateOneWithoutTransactionNestedInput>;
}
export declare class TransactionUncheckedUpdateWithoutPaymentInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    payment?: InstanceType<typeof PaymentUncheckedUpdateOneWithoutTransactionNestedInput>;
}
export declare class TransactionUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    payment?: InstanceType<typeof PaymentUncheckedUpdateOneWithoutTransactionNestedInput>;
}
export declare class TransactionUpdateManyMutationInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUpdateManyWithWhereWithoutAccountInput {
    where: InstanceType<typeof TransactionScalarWhereInput>;
    data: InstanceType<typeof TransactionUpdateManyMutationInput>;
}
export declare class TransactionUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof TransactionScalarWhereInput>;
    data: InstanceType<typeof TransactionUpdateManyMutationInput>;
}
export declare class TransactionUpdateManyWithoutAccountNestedInput {
    create?: Array<TransactionCreateWithoutAccountInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutAccountInput>;
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutAccountInput>;
    createMany?: InstanceType<typeof TransactionCreateManyAccountInputEnvelope>;
    set?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
    disconnect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
    delete?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
    update?: Array<TransactionUpdateWithWhereUniqueWithoutAccountInput>;
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutAccountInput>;
    deleteMany?: Array<TransactionScalarWhereInput>;
}
export declare class TransactionUpdateManyWithoutUserNestedInput {
    create?: Array<TransactionCreateWithoutUserInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutUserInput>;
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof TransactionCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
    disconnect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
    delete?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
    update?: Array<TransactionUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<TransactionScalarWhereInput>;
}
export declare class TransactionUpdateOneRequiredWithoutPaymentNestedInput {
    create?: InstanceType<typeof TransactionCreateWithoutPaymentInput>;
    connectOrCreate?: InstanceType<typeof TransactionCreateOrConnectWithoutPaymentInput>;
    upsert?: InstanceType<typeof TransactionUpsertWithoutPaymentInput>;
    connect?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
    update?: InstanceType<typeof TransactionUpdateToOneWithWhereWithoutPaymentInput>;
}
export declare class TransactionUpdateToOneWithWhereWithoutPaymentInput {
    where?: InstanceType<typeof TransactionWhereInput>;
    data: InstanceType<typeof TransactionUpdateWithoutPaymentInput>;
}
export declare class TransactionUpdateWithWhereUniqueWithoutAccountInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
    data: InstanceType<typeof TransactionUpdateWithoutAccountInput>;
}
export declare class TransactionUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
    data: InstanceType<typeof TransactionUpdateWithoutUserInput>;
}
export declare class TransactionUpdateWithoutAccountInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    User?: InstanceType<typeof UserUpdateOneRequiredWithoutTransactionsNestedInput>;
    payment?: InstanceType<typeof PaymentUpdateOneWithoutTransactionNestedInput>;
}
export declare class TransactionUpdateWithoutPaymentInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    User?: InstanceType<typeof UserUpdateOneRequiredWithoutTransactionsNestedInput>;
    account?: InstanceType<typeof AccountUpdateOneRequiredWithoutTransactionsNestedInput>;
}
export declare class TransactionUpdateWithoutUserInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    account?: InstanceType<typeof AccountUpdateOneRequiredWithoutTransactionsNestedInput>;
    payment?: InstanceType<typeof PaymentUpdateOneWithoutTransactionNestedInput>;
}
export declare class TransactionUpdateInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    User?: InstanceType<typeof UserUpdateOneRequiredWithoutTransactionsNestedInput>;
    account?: InstanceType<typeof AccountUpdateOneRequiredWithoutTransactionsNestedInput>;
    payment?: InstanceType<typeof PaymentUpdateOneWithoutTransactionNestedInput>;
}
export declare class TransactionUpsertWithWhereUniqueWithoutAccountInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
    update: InstanceType<typeof TransactionUpdateWithoutAccountInput>;
    create: InstanceType<typeof TransactionCreateWithoutAccountInput>;
}
export declare class TransactionUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
    update: InstanceType<typeof TransactionUpdateWithoutUserInput>;
    create: InstanceType<typeof TransactionCreateWithoutUserInput>;
}
export declare class TransactionUpsertWithoutPaymentInput {
    update: InstanceType<typeof TransactionUpdateWithoutPaymentInput>;
    create: InstanceType<typeof TransactionCreateWithoutPaymentInput>;
    where?: InstanceType<typeof TransactionWhereInput>;
}
export declare class TransactionWhereUniqueInput {
    id?: number;
    userId?: string;
    accountId?: number;
    AND?: Array<TransactionWhereInput>;
    OR?: Array<TransactionWhereInput>;
    NOT?: Array<TransactionWhereInput>;
    amount?: InstanceType<typeof FloatFilter>;
    status?: InstanceType<typeof EnumTransactionStatusFilter>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFilter>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFilter>;
    currentBalance?: InstanceType<typeof FloatFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    User?: InstanceType<typeof UserRelationFilter>;
    account?: InstanceType<typeof AccountRelationFilter>;
    payment?: InstanceType<typeof PaymentNullableRelationFilter>;
}
export declare class TransactionWhereInput {
    AND?: Array<TransactionWhereInput>;
    OR?: Array<TransactionWhereInput>;
    NOT?: Array<TransactionWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    amount?: InstanceType<typeof FloatFilter>;
    status?: InstanceType<typeof EnumTransactionStatusFilter>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFilter>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFilter>;
    currentBalance?: InstanceType<typeof FloatFilter>;
    userId?: InstanceType<typeof StringFilter>;
    accountId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    User?: InstanceType<typeof UserRelationFilter>;
    account?: InstanceType<typeof AccountRelationFilter>;
    payment?: InstanceType<typeof PaymentNullableRelationFilter>;
}
export declare class Transaction {
    id: number;
    amount: number;
    status: keyof typeof TransactionStatus;
    transactionType: keyof typeof TransactionType;
    transactionCategory: keyof typeof TransactionCategory;
    currentBalance: number;
    userId: string;
    accountId: number;
    createdAt: Date;
    User?: InstanceType<typeof User>;
    account?: InstanceType<typeof Account>;
    payment?: InstanceType<typeof Payment> | null;
}
export declare class UpdateManyTransactionArgs {
    data: InstanceType<typeof TransactionUpdateManyMutationInput>;
    where?: InstanceType<typeof TransactionWhereInput>;
}
export declare class UpdateOneTransactionArgs {
    data: InstanceType<typeof TransactionUpdateInput>;
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
}
export declare class UpsertOneTransactionArgs {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
    create: InstanceType<typeof TransactionCreateInput>;
    update: InstanceType<typeof TransactionUpdateInput>;
}
export declare class AggregateUser {
    _count?: InstanceType<typeof UserCountAggregate>;
    _avg?: InstanceType<typeof UserAvgAggregate>;
    _sum?: InstanceType<typeof UserSumAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class CreateManyUserArgs {
    data: Array<UserCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserArgs {
    data: InstanceType<typeof UserCreateInput>;
}
export declare class DeleteManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class DeleteOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class FindFirstUserOrThrowArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindFirstUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindUniqueUserOrThrowArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class FindUniqueUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UpdateManyUserArgs {
    data: InstanceType<typeof UserUpdateManyMutationInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UpdateOneUserArgs {
    data: InstanceType<typeof UserUpdateInput>;
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UpsertOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateInput>;
    update: InstanceType<typeof UserUpdateInput>;
}
export declare class UserAggregateArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserAvgAggregateInput {
    addressId?: true;
    schoolId?: true;
}
export declare class UserAvgAggregate {
    addressId?: number;
    schoolId?: number;
}
export declare class UserAvgOrderByAggregateInput {
    addressId?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
}
export declare class UserCountAggregateInput {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    addressId?: true;
    userRole?: true;
    userType?: true;
    avatarUrl?: true;
    whatsappNumber?: true;
    whatsappVerifiedAt?: true;
    password?: true;
    referralCode?: true;
    referredById?: true;
    status?: true;
    schoolId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    theme?: true;
    _all?: true;
}
export declare class UserCountAggregate {
    id: number;
    firstName: number;
    lastName: number;
    email: number;
    addressId: number;
    userRole: number;
    userType: number;
    avatarUrl: number;
    whatsappNumber: number;
    whatsappVerifiedAt: number;
    password: number;
    referralCode: number;
    referredById: number;
    status: number;
    schoolId: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    theme: number;
    _all: number;
}
export declare class UserCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    userType?: keyof typeof SortOrder;
    avatarUrl?: keyof typeof SortOrder;
    whatsappNumber?: keyof typeof SortOrder;
    whatsappVerifiedAt?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    referralCode?: keyof typeof SortOrder;
    referredById?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    theme?: keyof typeof SortOrder;
}
export declare class UserCount {
    referredUsers?: number;
    checkIns?: number;
    accounts?: number;
    transactions?: number;
    PointTransactions?: number;
    orders?: number;
    sessions?: number;
    hotelsCreated?: number;
    programsParticipation?: number;
    projectsInvestment?: number;
    claimedRewards?: number;
    userNotifications?: number;
    programsCreated?: number;
    filesCreated?: number;
}
export declare class UserCreateManyReferredByInputEnvelope {
    data: Array<UserCreateManyReferredByInput>;
    skipDuplicates?: boolean;
}
export declare class UserCreateManyReferredByInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
}
export declare class UserCreateManySchoolInputEnvelope {
    data: Array<UserCreateManySchoolInput>;
    skipDuplicates?: boolean;
}
export declare class UserCreateManySchoolInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
}
export declare class UserCreateManyInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
}
export declare class UserCreateNestedManyWithoutClaimedRewardsInput {
    create?: Array<UserCreateWithoutClaimedRewardsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutClaimedRewardsInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
}
export declare class UserCreateNestedManyWithoutProgramsParticipationInput {
    create?: Array<UserCreateWithoutProgramsParticipationInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutProgramsParticipationInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
}
export declare class UserCreateNestedManyWithoutProjectsInvestmentInput {
    create?: Array<UserCreateWithoutProjectsInvestmentInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutProjectsInvestmentInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
}
export declare class UserCreateNestedManyWithoutReferredByInput {
    create?: Array<UserCreateWithoutReferredByInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutReferredByInput>;
    createMany?: InstanceType<typeof UserCreateManyReferredByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
}
export declare class UserCreateNestedManyWithoutSchoolInput {
    create?: Array<UserCreateWithoutSchoolInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutSchoolInput>;
    createMany?: InstanceType<typeof UserCreateManySchoolInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
}
export declare class UserCreateNestedOneWithoutAccountsInput {
    create?: InstanceType<typeof UserCreateWithoutAccountsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAccountsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof UserCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutCheckInsInput {
    create?: InstanceType<typeof UserCreateWithoutCheckInsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCheckInsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutFilesCreatedInput {
    create?: InstanceType<typeof UserCreateWithoutFilesCreatedInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutFilesCreatedInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutHotelsCreatedInput {
    create?: InstanceType<typeof UserCreateWithoutHotelsCreatedInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutHotelsCreatedInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutOrdersInput {
    create?: InstanceType<typeof UserCreateWithoutOrdersInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutOrdersInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutPointTransactionsInput {
    create?: InstanceType<typeof UserCreateWithoutPointTransactionsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPointTransactionsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutProgramsCreatedInput {
    create?: InstanceType<typeof UserCreateWithoutProgramsCreatedInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProgramsCreatedInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutReferredUsersInput {
    create?: InstanceType<typeof UserCreateWithoutReferredUsersInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutReferredUsersInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutSessionsInput {
    create?: InstanceType<typeof UserCreateWithoutSessionsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSessionsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutTransactionsInput {
    create?: InstanceType<typeof UserCreateWithoutTransactionsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutTransactionsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutUserNotificationsInput {
    create?: InstanceType<typeof UserCreateWithoutUserNotificationsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserNotificationsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateOrConnectWithoutAccountsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutAccountsInput>;
}
export declare class UserCreateOrConnectWithoutAddressInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutAddressInput>;
}
export declare class UserCreateOrConnectWithoutCheckInsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutCheckInsInput>;
}
export declare class UserCreateOrConnectWithoutClaimedRewardsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutClaimedRewardsInput>;
}
export declare class UserCreateOrConnectWithoutFilesCreatedInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutFilesCreatedInput>;
}
export declare class UserCreateOrConnectWithoutHotelsCreatedInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutHotelsCreatedInput>;
}
export declare class UserCreateOrConnectWithoutOrdersInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutOrdersInput>;
}
export declare class UserCreateOrConnectWithoutPointTransactionsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutPointTransactionsInput>;
}
export declare class UserCreateOrConnectWithoutProgramsCreatedInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutProgramsCreatedInput>;
}
export declare class UserCreateOrConnectWithoutProgramsParticipationInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutProgramsParticipationInput>;
}
export declare class UserCreateOrConnectWithoutProjectsInvestmentInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutProjectsInvestmentInput>;
}
export declare class UserCreateOrConnectWithoutReferredByInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutReferredByInput>;
}
export declare class UserCreateOrConnectWithoutReferredUsersInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutReferredUsersInput>;
}
export declare class UserCreateOrConnectWithoutSchoolInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutSchoolInput>;
}
export declare class UserCreateOrConnectWithoutSessionsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutSessionsInput>;
}
export declare class UserCreateOrConnectWithoutTransactionsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutTransactionsInput>;
}
export declare class UserCreateOrConnectWithoutUserNotificationsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutUserNotificationsInput>;
}
export declare class UserCreateWithoutAccountsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutAddressInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutCheckInsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutClaimedRewardsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectCreateNestedManyWithoutInvestorsInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutFilesCreatedInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutHotelsCreatedInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutOrdersInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionCreateNestedManyWithoutUserInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutPointTransactionsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutProgramsCreatedInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutProgramsParticipationInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    projectsInvestment?: InstanceType<typeof ProjectCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutProjectsInvestmentInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutReferredByInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutReferredUsersInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutSchoolInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutSessionsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutTransactionsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutUserNotificationsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardCreateNestedManyWithoutClaimersInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserGroupByArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithAggregationInput>;
    by: Array<keyof typeof UserScalarFieldEnum>;
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserGroupBy {
    id: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status: keyof typeof UserStatus;
    schoolId?: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string;
    theme: keyof typeof Theme;
    _count?: InstanceType<typeof UserCountAggregate>;
    _avg?: InstanceType<typeof UserAvgAggregate>;
    _sum?: InstanceType<typeof UserSumAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class UserListRelationFilter {
    every?: InstanceType<typeof UserWhereInput>;
    some?: InstanceType<typeof UserWhereInput>;
    none?: InstanceType<typeof UserWhereInput>;
}
export declare class UserMaxAggregateInput {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    addressId?: true;
    userRole?: true;
    userType?: true;
    avatarUrl?: true;
    whatsappNumber?: true;
    whatsappVerifiedAt?: true;
    password?: true;
    referralCode?: true;
    referredById?: true;
    status?: true;
    schoolId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    theme?: true;
}
export declare class UserMaxAggregate {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    addressId?: number;
    userRole?: keyof typeof UserRole;
    userType?: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber?: string;
    whatsappVerifiedAt?: Date | string;
    password?: string;
    referralCode?: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
}
export declare class UserMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    userType?: keyof typeof SortOrder;
    avatarUrl?: keyof typeof SortOrder;
    whatsappNumber?: keyof typeof SortOrder;
    whatsappVerifiedAt?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    referralCode?: keyof typeof SortOrder;
    referredById?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    theme?: keyof typeof SortOrder;
}
export declare class UserMinAggregateInput {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    addressId?: true;
    userRole?: true;
    userType?: true;
    avatarUrl?: true;
    whatsappNumber?: true;
    whatsappVerifiedAt?: true;
    password?: true;
    referralCode?: true;
    referredById?: true;
    status?: true;
    schoolId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    theme?: true;
}
export declare class UserMinAggregate {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    addressId?: number;
    userRole?: keyof typeof UserRole;
    userType?: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber?: string;
    whatsappVerifiedAt?: Date | string;
    password?: string;
    referralCode?: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
}
export declare class UserMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    userType?: keyof typeof SortOrder;
    avatarUrl?: keyof typeof SortOrder;
    whatsappNumber?: keyof typeof SortOrder;
    whatsappVerifiedAt?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    referralCode?: keyof typeof SortOrder;
    referredById?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    theme?: keyof typeof SortOrder;
}
export declare class UserNullableRelationFilter {
    is?: InstanceType<typeof UserWhereInput>;
    isNot?: InstanceType<typeof UserWhereInput>;
}
export declare class UserOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class UserOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: InstanceType<typeof SortOrderInput>;
    email?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    userType?: keyof typeof SortOrder;
    avatarUrl?: InstanceType<typeof SortOrderInput>;
    whatsappNumber?: keyof typeof SortOrder;
    whatsappVerifiedAt?: InstanceType<typeof SortOrderInput>;
    password?: keyof typeof SortOrder;
    referralCode?: keyof typeof SortOrder;
    referredById?: InstanceType<typeof SortOrderInput>;
    status?: keyof typeof SortOrder;
    schoolId?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    theme?: keyof typeof SortOrder;
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof UserAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof UserSumOrderByAggregateInput>;
}
export declare class UserOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: InstanceType<typeof SortOrderInput>;
    email?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    userType?: keyof typeof SortOrder;
    avatarUrl?: InstanceType<typeof SortOrderInput>;
    whatsappNumber?: keyof typeof SortOrder;
    whatsappVerifiedAt?: InstanceType<typeof SortOrderInput>;
    password?: keyof typeof SortOrder;
    referralCode?: keyof typeof SortOrder;
    referredById?: InstanceType<typeof SortOrderInput>;
    status?: keyof typeof SortOrder;
    schoolId?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    theme?: keyof typeof SortOrder;
    address?: InstanceType<typeof AddressOrderByWithRelationInput>;
    referredBy?: InstanceType<typeof UserOrderByWithRelationInput>;
    referredUsers?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    checkIns?: InstanceType<typeof CheckInOrderByRelationAggregateInput>;
    school?: InstanceType<typeof SchoolOrderByWithRelationInput>;
    accounts?: InstanceType<typeof AccountOrderByRelationAggregateInput>;
    transactions?: InstanceType<typeof TransactionOrderByRelationAggregateInput>;
    PointTransactions?: InstanceType<typeof PointTransactionOrderByRelationAggregateInput>;
    orders?: InstanceType<typeof OrderOrderByRelationAggregateInput>;
    sessions?: InstanceType<typeof SessionOrderByRelationAggregateInput>;
    hotelsCreated?: InstanceType<typeof HotelOrderByRelationAggregateInput>;
    programsParticipation?: InstanceType<typeof ProgramOrderByRelationAggregateInput>;
    projectsInvestment?: InstanceType<typeof ProjectOrderByRelationAggregateInput>;
    claimedRewards?: InstanceType<typeof RewardOrderByRelationAggregateInput>;
    userNotifications?: InstanceType<typeof UserNotificationOrderByRelationAggregateInput>;
    programsCreated?: InstanceType<typeof ProgramOrderByRelationAggregateInput>;
    filesCreated?: InstanceType<typeof FileOrderByRelationAggregateInput>;
}
export declare class UserRelationFilter {
    is?: InstanceType<typeof UserWhereInput>;
    isNot?: InstanceType<typeof UserWhereInput>;
}
export declare class UserScalarWhereWithAggregatesInput {
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    firstName?: InstanceType<typeof StringWithAggregatesFilter>;
    lastName?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    addressId?: InstanceType<typeof IntWithAggregatesFilter>;
    userRole?: InstanceType<typeof EnumUserRoleWithAggregatesFilter>;
    userType?: InstanceType<typeof EnumUserTypeWithAggregatesFilter>;
    avatarUrl?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    whatsappNumber?: InstanceType<typeof StringWithAggregatesFilter>;
    whatsappVerifiedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    referralCode?: InstanceType<typeof StringWithAggregatesFilter>;
    referredById?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    status?: InstanceType<typeof EnumUserStatusWithAggregatesFilter>;
    schoolId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    theme?: InstanceType<typeof EnumThemeWithAggregatesFilter>;
}
export declare class UserScalarWhereInput {
    AND?: Array<UserScalarWhereInput>;
    OR?: Array<UserScalarWhereInput>;
    NOT?: Array<UserScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    firstName?: InstanceType<typeof StringFilter>;
    lastName?: InstanceType<typeof StringNullableFilter>;
    email?: InstanceType<typeof StringFilter>;
    addressId?: InstanceType<typeof IntFilter>;
    userRole?: InstanceType<typeof EnumUserRoleFilter>;
    userType?: InstanceType<typeof EnumUserTypeFilter>;
    avatarUrl?: InstanceType<typeof StringNullableFilter>;
    whatsappNumber?: InstanceType<typeof StringFilter>;
    whatsappVerifiedAt?: InstanceType<typeof DateTimeNullableFilter>;
    password?: InstanceType<typeof StringFilter>;
    referralCode?: InstanceType<typeof StringFilter>;
    referredById?: InstanceType<typeof StringNullableFilter>;
    status?: InstanceType<typeof EnumUserStatusFilter>;
    schoolId?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    theme?: InstanceType<typeof EnumThemeFilter>;
}
export declare class UserSumAggregateInput {
    addressId?: true;
    schoolId?: true;
}
export declare class UserSumAggregate {
    addressId?: number;
    schoolId?: number;
}
export declare class UserSumOrderByAggregateInput {
    addressId?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
}
export declare class UserUncheckedCreateNestedManyWithoutClaimedRewardsInput {
    create?: Array<UserCreateWithoutClaimedRewardsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutClaimedRewardsInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
}
export declare class UserUncheckedCreateNestedManyWithoutProgramsParticipationInput {
    create?: Array<UserCreateWithoutProgramsParticipationInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutProgramsParticipationInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
}
export declare class UserUncheckedCreateNestedManyWithoutProjectsInvestmentInput {
    create?: Array<UserCreateWithoutProjectsInvestmentInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutProjectsInvestmentInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
}
export declare class UserUncheckedCreateNestedManyWithoutReferredByInput {
    create?: Array<UserCreateWithoutReferredByInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutReferredByInput>;
    createMany?: InstanceType<typeof UserCreateManyReferredByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
}
export declare class UserUncheckedCreateNestedManyWithoutSchoolInput {
    create?: Array<UserCreateWithoutSchoolInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutSchoolInput>;
    createMany?: InstanceType<typeof UserCreateManySchoolInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
}
export declare class UserUncheckedCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof UserCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserUncheckedCreateWithoutAccountsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutAddressInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutCheckInsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutClaimedRewardsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutInvestorsInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutFilesCreatedInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutHotelsCreatedInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutOrdersInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedCreateNestedManyWithoutUserInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutPointTransactionsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutProgramsCreatedInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutProgramsParticipationInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutProjectsInvestmentInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutReferredByInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutReferredUsersInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutSchoolInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutSessionsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutTransactionsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutUserNotificationsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedCreateNestedManyWithoutClaimersInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutUserInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutInvestorsInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedCreateNestedManyWithoutClaimersInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedUpdateManyWithoutClaimedRewardsNestedInput {
    create?: Array<UserCreateWithoutClaimedRewardsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutClaimedRewardsInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutClaimedRewardsInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutClaimedRewardsInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutClaimedRewardsInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutClaimedRewardsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyWithoutProgramsParticipationNestedInput {
    create?: Array<UserCreateWithoutProgramsParticipationInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutProgramsParticipationInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutProgramsParticipationInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutProgramsParticipationInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutProgramsParticipationInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutProgramsParticipationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyWithoutProjectsInvestmentNestedInput {
    create?: Array<UserCreateWithoutProjectsInvestmentInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutProjectsInvestmentInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutProjectsInvestmentInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutProjectsInvestmentInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutProjectsInvestmentInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutProjectsInvestmentInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyWithoutReferredByNestedInput {
    create?: Array<UserCreateWithoutReferredByInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutReferredByInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutReferredByInput>;
    createMany?: InstanceType<typeof UserCreateManyReferredByInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutReferredByInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutReferredByInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutReferredByInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyWithoutSchoolNestedInput {
    create?: Array<UserCreateWithoutSchoolInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutSchoolInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutSchoolInput>;
    createMany?: InstanceType<typeof UserCreateManySchoolInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutSchoolInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutSchoolInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateOneWithoutAddressNestedInput {
    create?: InstanceType<typeof UserCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutAddressInput>;
    disconnect?: InstanceType<typeof UserWhereInput>;
    delete?: InstanceType<typeof UserWhereInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class UserUncheckedUpdateWithoutAccountsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutAddressInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutCheckInsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutClaimedRewardsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutInvestorsNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutFilesCreatedInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutHotelsCreatedInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutOrdersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedUpdateManyWithoutUserNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutPointTransactionsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutProgramsCreatedInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutProgramsParticipationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutProjectsInvestmentInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutReferredByInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutReferredUsersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutSessionsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutTransactionsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutUserNotificationsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedUpdateManyWithoutClaimersNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUncheckedUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
}
export declare class UserUpdateManyWithWhereWithoutClaimedRewardsInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithWhereWithoutProgramsParticipationInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithWhereWithoutProjectsInvestmentInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithWhereWithoutReferredByInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithWhereWithoutSchoolInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithoutClaimedRewardsNestedInput {
    create?: Array<UserCreateWithoutClaimedRewardsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutClaimedRewardsInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutClaimedRewardsInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutClaimedRewardsInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutClaimedRewardsInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateManyWithoutProgramsParticipationNestedInput {
    create?: Array<UserCreateWithoutProgramsParticipationInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutProgramsParticipationInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutProgramsParticipationInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutProgramsParticipationInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutProgramsParticipationInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateManyWithoutProjectsInvestmentNestedInput {
    create?: Array<UserCreateWithoutProjectsInvestmentInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutProjectsInvestmentInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutProjectsInvestmentInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutProjectsInvestmentInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutProjectsInvestmentInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateManyWithoutReferredByNestedInput {
    create?: Array<UserCreateWithoutReferredByInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutReferredByInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutReferredByInput>;
    createMany?: InstanceType<typeof UserCreateManyReferredByInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutReferredByInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutReferredByInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateManyWithoutSchoolNestedInput {
    create?: Array<UserCreateWithoutSchoolInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutSchoolInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutSchoolInput>;
    createMany?: InstanceType<typeof UserCreateManySchoolInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutSchoolInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutSchoolInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateOneRequiredWithoutAccountsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutAccountsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAccountsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutAccountsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutAccountsInput>;
}
export declare class UserUpdateOneRequiredWithoutCheckInsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutCheckInsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCheckInsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutCheckInsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutCheckInsInput>;
}
export declare class UserUpdateOneRequiredWithoutFilesCreatedNestedInput {
    create?: InstanceType<typeof UserCreateWithoutFilesCreatedInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutFilesCreatedInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutFilesCreatedInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutFilesCreatedInput>;
}
export declare class UserUpdateOneRequiredWithoutHotelsCreatedNestedInput {
    create?: InstanceType<typeof UserCreateWithoutHotelsCreatedInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutHotelsCreatedInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutHotelsCreatedInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutHotelsCreatedInput>;
}
export declare class UserUpdateOneRequiredWithoutOrdersNestedInput {
    create?: InstanceType<typeof UserCreateWithoutOrdersInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutOrdersInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutOrdersInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutOrdersInput>;
}
export declare class UserUpdateOneRequiredWithoutPointTransactionsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutPointTransactionsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPointTransactionsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutPointTransactionsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutPointTransactionsInput>;
}
export declare class UserUpdateOneRequiredWithoutProgramsCreatedNestedInput {
    create?: InstanceType<typeof UserCreateWithoutProgramsCreatedInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProgramsCreatedInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutProgramsCreatedInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutProgramsCreatedInput>;
}
export declare class UserUpdateOneRequiredWithoutSessionsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutSessionsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSessionsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutSessionsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutSessionsInput>;
}
export declare class UserUpdateOneRequiredWithoutTransactionsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutTransactionsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutTransactionsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutTransactionsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutTransactionsInput>;
}
export declare class UserUpdateOneRequiredWithoutUserNotificationsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutUserNotificationsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserNotificationsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutUserNotificationsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutUserNotificationsInput>;
}
export declare class UserUpdateOneWithoutAddressNestedInput {
    create?: InstanceType<typeof UserCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutAddressInput>;
    disconnect?: InstanceType<typeof UserWhereInput>;
    delete?: InstanceType<typeof UserWhereInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class UserUpdateOneWithoutReferredUsersNestedInput {
    create?: InstanceType<typeof UserCreateWithoutReferredUsersInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutReferredUsersInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutReferredUsersInput>;
    disconnect?: InstanceType<typeof UserWhereInput>;
    delete?: InstanceType<typeof UserWhereInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutReferredUsersInput>;
}
export declare class UserUpdateToOneWithWhereWithoutAccountsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutAccountsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutAddressInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutAddressInput>;
}
export declare class UserUpdateToOneWithWhereWithoutCheckInsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutCheckInsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutFilesCreatedInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutFilesCreatedInput>;
}
export declare class UserUpdateToOneWithWhereWithoutHotelsCreatedInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutHotelsCreatedInput>;
}
export declare class UserUpdateToOneWithWhereWithoutOrdersInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutOrdersInput>;
}
export declare class UserUpdateToOneWithWhereWithoutPointTransactionsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutPointTransactionsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutProgramsCreatedInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutProgramsCreatedInput>;
}
export declare class UserUpdateToOneWithWhereWithoutReferredUsersInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutReferredUsersInput>;
}
export declare class UserUpdateToOneWithWhereWithoutSessionsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutSessionsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutTransactionsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutTransactionsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutUserNotificationsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutUserNotificationsInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutClaimedRewardsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    data: InstanceType<typeof UserUpdateWithoutClaimedRewardsInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutProgramsParticipationInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    data: InstanceType<typeof UserUpdateWithoutProgramsParticipationInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutProjectsInvestmentInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    data: InstanceType<typeof UserUpdateWithoutProjectsInvestmentInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutReferredByInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    data: InstanceType<typeof UserUpdateWithoutReferredByInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutSchoolInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    data: InstanceType<typeof UserUpdateWithoutSchoolInput>;
}
export declare class UserUpdateWithoutAccountsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutAddressInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutCheckInsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutClaimedRewardsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUpdateManyWithoutInvestorsNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutFilesCreatedInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutHotelsCreatedInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutOrdersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUpdateManyWithoutUserNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutPointTransactionsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutProgramsCreatedInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutProgramsParticipationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutProjectsInvestmentInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutReferredByInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutReferredUsersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutSessionsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutTransactionsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutUserNotificationsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUpdateManyWithoutClaimersNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutUserNestedInput>;
    PointTransactions?: InstanceType<typeof PointTransactionUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    projectsInvestment?: InstanceType<typeof ProjectUpdateManyWithoutInvestorsNestedInput>;
    claimedRewards?: InstanceType<typeof RewardUpdateManyWithoutClaimersNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutClaimedRewardsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update: InstanceType<typeof UserUpdateWithoutClaimedRewardsInput>;
    create: InstanceType<typeof UserCreateWithoutClaimedRewardsInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutProgramsParticipationInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update: InstanceType<typeof UserUpdateWithoutProgramsParticipationInput>;
    create: InstanceType<typeof UserCreateWithoutProgramsParticipationInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutProjectsInvestmentInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update: InstanceType<typeof UserUpdateWithoutProjectsInvestmentInput>;
    create: InstanceType<typeof UserCreateWithoutProjectsInvestmentInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutReferredByInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update: InstanceType<typeof UserUpdateWithoutReferredByInput>;
    create: InstanceType<typeof UserCreateWithoutReferredByInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutSchoolInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update: InstanceType<typeof UserUpdateWithoutSchoolInput>;
    create: InstanceType<typeof UserCreateWithoutSchoolInput>;
}
export declare class UserUpsertWithoutAccountsInput {
    update: InstanceType<typeof UserUpdateWithoutAccountsInput>;
    create: InstanceType<typeof UserCreateWithoutAccountsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutAddressInput {
    update: InstanceType<typeof UserUpdateWithoutAddressInput>;
    create: InstanceType<typeof UserCreateWithoutAddressInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutCheckInsInput {
    update: InstanceType<typeof UserUpdateWithoutCheckInsInput>;
    create: InstanceType<typeof UserCreateWithoutCheckInsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutFilesCreatedInput {
    update: InstanceType<typeof UserUpdateWithoutFilesCreatedInput>;
    create: InstanceType<typeof UserCreateWithoutFilesCreatedInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutHotelsCreatedInput {
    update: InstanceType<typeof UserUpdateWithoutHotelsCreatedInput>;
    create: InstanceType<typeof UserCreateWithoutHotelsCreatedInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutOrdersInput {
    update: InstanceType<typeof UserUpdateWithoutOrdersInput>;
    create: InstanceType<typeof UserCreateWithoutOrdersInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutPointTransactionsInput {
    update: InstanceType<typeof UserUpdateWithoutPointTransactionsInput>;
    create: InstanceType<typeof UserCreateWithoutPointTransactionsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutProgramsCreatedInput {
    update: InstanceType<typeof UserUpdateWithoutProgramsCreatedInput>;
    create: InstanceType<typeof UserCreateWithoutProgramsCreatedInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutReferredUsersInput {
    update: InstanceType<typeof UserUpdateWithoutReferredUsersInput>;
    create: InstanceType<typeof UserCreateWithoutReferredUsersInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutSessionsInput {
    update: InstanceType<typeof UserUpdateWithoutSessionsInput>;
    create: InstanceType<typeof UserCreateWithoutSessionsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutTransactionsInput {
    update: InstanceType<typeof UserUpdateWithoutTransactionsInput>;
    create: InstanceType<typeof UserCreateWithoutTransactionsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutUserNotificationsInput {
    update: InstanceType<typeof UserUpdateWithoutUserNotificationsInput>;
    create: InstanceType<typeof UserCreateWithoutUserNotificationsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserWhereUniqueInput {
    id?: string;
    email?: string;
    addressId?: number;
    whatsappNumber?: string;
    referralCode?: string;
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    firstName?: InstanceType<typeof StringFilter>;
    lastName?: InstanceType<typeof StringNullableFilter>;
    userRole?: InstanceType<typeof EnumUserRoleFilter>;
    userType?: InstanceType<typeof EnumUserTypeFilter>;
    avatarUrl?: InstanceType<typeof StringNullableFilter>;
    whatsappVerifiedAt?: InstanceType<typeof DateTimeNullableFilter>;
    password?: InstanceType<typeof StringFilter>;
    referredById?: InstanceType<typeof StringNullableFilter>;
    status?: InstanceType<typeof EnumUserStatusFilter>;
    schoolId?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    theme?: InstanceType<typeof EnumThemeFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
    referredBy?: InstanceType<typeof UserNullableRelationFilter>;
    referredUsers?: InstanceType<typeof UserListRelationFilter>;
    checkIns?: InstanceType<typeof CheckInListRelationFilter>;
    school?: InstanceType<typeof SchoolNullableRelationFilter>;
    accounts?: InstanceType<typeof AccountListRelationFilter>;
    transactions?: InstanceType<typeof TransactionListRelationFilter>;
    PointTransactions?: InstanceType<typeof PointTransactionListRelationFilter>;
    orders?: InstanceType<typeof OrderListRelationFilter>;
    sessions?: InstanceType<typeof SessionListRelationFilter>;
    hotelsCreated?: InstanceType<typeof HotelListRelationFilter>;
    programsParticipation?: InstanceType<typeof ProgramListRelationFilter>;
    projectsInvestment?: InstanceType<typeof ProjectListRelationFilter>;
    claimedRewards?: InstanceType<typeof RewardListRelationFilter>;
    userNotifications?: InstanceType<typeof UserNotificationListRelationFilter>;
    programsCreated?: InstanceType<typeof ProgramListRelationFilter>;
    filesCreated?: InstanceType<typeof FileListRelationFilter>;
}
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    firstName?: InstanceType<typeof StringFilter>;
    lastName?: InstanceType<typeof StringNullableFilter>;
    email?: InstanceType<typeof StringFilter>;
    addressId?: InstanceType<typeof IntFilter>;
    userRole?: InstanceType<typeof EnumUserRoleFilter>;
    userType?: InstanceType<typeof EnumUserTypeFilter>;
    avatarUrl?: InstanceType<typeof StringNullableFilter>;
    whatsappNumber?: InstanceType<typeof StringFilter>;
    whatsappVerifiedAt?: InstanceType<typeof DateTimeNullableFilter>;
    password?: InstanceType<typeof StringFilter>;
    referralCode?: InstanceType<typeof StringFilter>;
    referredById?: InstanceType<typeof StringNullableFilter>;
    status?: InstanceType<typeof EnumUserStatusFilter>;
    schoolId?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    theme?: InstanceType<typeof EnumThemeFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
    referredBy?: InstanceType<typeof UserNullableRelationFilter>;
    referredUsers?: InstanceType<typeof UserListRelationFilter>;
    checkIns?: InstanceType<typeof CheckInListRelationFilter>;
    school?: InstanceType<typeof SchoolNullableRelationFilter>;
    accounts?: InstanceType<typeof AccountListRelationFilter>;
    transactions?: InstanceType<typeof TransactionListRelationFilter>;
    PointTransactions?: InstanceType<typeof PointTransactionListRelationFilter>;
    orders?: InstanceType<typeof OrderListRelationFilter>;
    sessions?: InstanceType<typeof SessionListRelationFilter>;
    hotelsCreated?: InstanceType<typeof HotelListRelationFilter>;
    programsParticipation?: InstanceType<typeof ProgramListRelationFilter>;
    projectsInvestment?: InstanceType<typeof ProjectListRelationFilter>;
    claimedRewards?: InstanceType<typeof RewardListRelationFilter>;
    userNotifications?: InstanceType<typeof UserNotificationListRelationFilter>;
    programsCreated?: InstanceType<typeof ProgramListRelationFilter>;
    filesCreated?: InstanceType<typeof FileListRelationFilter>;
}
export declare class User {
    id: string;
    firstName: string;
    lastName: string | null;
    email: string;
    addressId: number;
    userRole: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl: string | null;
    whatsappNumber: string;
    whatsappVerifiedAt: Date | null;
    password: string;
    referralCode: string;
    referredById: string | null;
    status: keyof typeof UserStatus;
    schoolId: number | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    theme: keyof typeof Theme;
    address?: InstanceType<typeof Address>;
    referredBy?: InstanceType<typeof User> | null;
    referredUsers?: Array<User>;
    checkIns?: Array<CheckIn>;
    school?: InstanceType<typeof School> | null;
    accounts?: Array<Account>;
    transactions?: Array<Transaction>;
    PointTransactions?: Array<PointTransaction>;
    orders?: Array<Order>;
    sessions?: Array<Session>;
    hotelsCreated?: Array<Hotel>;
    programsParticipation?: Array<Program>;
    projectsInvestment?: Array<Project>;
    claimedRewards?: Array<Reward>;
    userNotifications?: Array<UserNotification>;
    programsCreated?: Array<Program>;
    filesCreated?: Array<File>;
    _count?: InstanceType<typeof UserCount>;
}
export declare class AggregateUserNotification {
    _count?: InstanceType<typeof UserNotificationCountAggregate>;
    _avg?: InstanceType<typeof UserNotificationAvgAggregate>;
    _sum?: InstanceType<typeof UserNotificationSumAggregate>;
    _min?: InstanceType<typeof UserNotificationMinAggregate>;
    _max?: InstanceType<typeof UserNotificationMaxAggregate>;
}
export declare class CreateManyUserNotificationArgs {
    data: Array<UserNotificationCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserNotificationArgs {
    data: InstanceType<typeof UserNotificationCreateInput>;
}
export declare class DeleteManyUserNotificationArgs {
    where?: InstanceType<typeof UserNotificationWhereInput>;
}
export declare class DeleteOneUserNotificationArgs {
    where: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
}
export declare class FindFirstUserNotificationOrThrowArgs {
    where?: InstanceType<typeof UserNotificationWhereInput>;
    orderBy?: Array<UserNotificationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserNotificationScalarFieldEnum>;
}
export declare class FindFirstUserNotificationArgs {
    where?: InstanceType<typeof UserNotificationWhereInput>;
    orderBy?: Array<UserNotificationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserNotificationScalarFieldEnum>;
}
export declare class FindManyUserNotificationArgs {
    where?: InstanceType<typeof UserNotificationWhereInput>;
    orderBy?: Array<UserNotificationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserNotificationScalarFieldEnum>;
}
export declare class FindUniqueUserNotificationOrThrowArgs {
    where: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
}
export declare class FindUniqueUserNotificationArgs {
    where: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
}
export declare class UpdateManyUserNotificationArgs {
    data: InstanceType<typeof UserNotificationUpdateManyMutationInput>;
    where?: InstanceType<typeof UserNotificationWhereInput>;
}
export declare class UpdateOneUserNotificationArgs {
    data: InstanceType<typeof UserNotificationUpdateInput>;
    where: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
}
export declare class UpsertOneUserNotificationArgs {
    where: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
    create: InstanceType<typeof UserNotificationCreateInput>;
    update: InstanceType<typeof UserNotificationUpdateInput>;
}
export declare class UserNotificationAggregateArgs {
    where?: InstanceType<typeof UserNotificationWhereInput>;
    orderBy?: Array<UserNotificationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserNotificationCountAggregateInput>;
    _avg?: InstanceType<typeof UserNotificationAvgAggregateInput>;
    _sum?: InstanceType<typeof UserNotificationSumAggregateInput>;
    _min?: InstanceType<typeof UserNotificationMinAggregateInput>;
    _max?: InstanceType<typeof UserNotificationMaxAggregateInput>;
}
export declare class UserNotificationAvgAggregateInput {
    id?: true;
}
export declare class UserNotificationAvgAggregate {
    id?: number;
}
export declare class UserNotificationAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class UserNotificationCountAggregateInput {
    id?: true;
    title?: true;
    subtitle?: true;
    content?: true;
    createdAt?: true;
    category?: true;
    isRead?: true;
    isCleared?: true;
    userId?: true;
    deepLink?: true;
    fcmToken?: true;
    _all?: true;
}
export declare class UserNotificationCountAggregate {
    id: number;
    title: number;
    subtitle: number;
    content: number;
    createdAt: number;
    category: number;
    isRead: number;
    isCleared: number;
    userId: number;
    deepLink: number;
    fcmToken: number;
    _all: number;
}
export declare class UserNotificationCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    category?: keyof typeof SortOrder;
    isRead?: keyof typeof SortOrder;
    isCleared?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    deepLink?: keyof typeof SortOrder;
    fcmToken?: keyof typeof SortOrder;
}
export declare class UserNotificationCreateManyUserInputEnvelope {
    data: Array<UserNotificationCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class UserNotificationCreateManyUserInput {
    id?: number;
    title: string;
    subtitle: string;
    content: string;
    createdAt?: Date | string;
    category: keyof typeof UserNotificationCategory;
    isRead?: boolean;
    isCleared?: boolean;
    deepLink?: string;
    fcmToken?: string;
}
export declare class UserNotificationCreateManyInput {
    id?: number;
    title: string;
    subtitle: string;
    content: string;
    createdAt?: Date | string;
    category: keyof typeof UserNotificationCategory;
    isRead?: boolean;
    isCleared?: boolean;
    userId: string;
    deepLink?: string;
    fcmToken?: string;
}
export declare class UserNotificationCreateNestedManyWithoutUserInput {
    create?: Array<UserNotificationCreateWithoutUserInput>;
    connectOrCreate?: Array<UserNotificationCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof UserNotificationCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
}
export declare class UserNotificationCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
    create: InstanceType<typeof UserNotificationCreateWithoutUserInput>;
}
export declare class UserNotificationCreateWithoutUserInput {
    title: string;
    subtitle: string;
    content: string;
    createdAt?: Date | string;
    category: keyof typeof UserNotificationCategory;
    isRead?: boolean;
    isCleared?: boolean;
    deepLink?: string;
    fcmToken?: string;
}
export declare class UserNotificationCreateInput {
    title: string;
    subtitle: string;
    content: string;
    createdAt?: Date | string;
    category: keyof typeof UserNotificationCategory;
    isRead?: boolean;
    isCleared?: boolean;
    deepLink?: string;
    fcmToken?: string;
    user: InstanceType<typeof UserCreateNestedOneWithoutUserNotificationsInput>;
}
export declare class UserNotificationGroupByArgs {
    where?: InstanceType<typeof UserNotificationWhereInput>;
    orderBy?: Array<UserNotificationOrderByWithAggregationInput>;
    by: Array<keyof typeof UserNotificationScalarFieldEnum>;
    having?: InstanceType<typeof UserNotificationScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserNotificationCountAggregateInput>;
    _avg?: InstanceType<typeof UserNotificationAvgAggregateInput>;
    _sum?: InstanceType<typeof UserNotificationSumAggregateInput>;
    _min?: InstanceType<typeof UserNotificationMinAggregateInput>;
    _max?: InstanceType<typeof UserNotificationMaxAggregateInput>;
}
export declare class UserNotificationGroupBy {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    createdAt: Date | string;
    category: keyof typeof UserNotificationCategory;
    isRead: boolean;
    isCleared: boolean;
    userId: string;
    deepLink?: string;
    fcmToken?: string;
    _count?: InstanceType<typeof UserNotificationCountAggregate>;
    _avg?: InstanceType<typeof UserNotificationAvgAggregate>;
    _sum?: InstanceType<typeof UserNotificationSumAggregate>;
    _min?: InstanceType<typeof UserNotificationMinAggregate>;
    _max?: InstanceType<typeof UserNotificationMaxAggregate>;
}
export declare class UserNotificationListRelationFilter {
    every?: InstanceType<typeof UserNotificationWhereInput>;
    some?: InstanceType<typeof UserNotificationWhereInput>;
    none?: InstanceType<typeof UserNotificationWhereInput>;
}
export declare class UserNotificationMaxAggregateInput {
    id?: true;
    title?: true;
    subtitle?: true;
    content?: true;
    createdAt?: true;
    category?: true;
    isRead?: true;
    isCleared?: true;
    userId?: true;
    deepLink?: true;
    fcmToken?: true;
}
export declare class UserNotificationMaxAggregate {
    id?: number;
    title?: string;
    subtitle?: string;
    content?: string;
    createdAt?: Date | string;
    category?: keyof typeof UserNotificationCategory;
    isRead?: boolean;
    isCleared?: boolean;
    userId?: string;
    deepLink?: string;
    fcmToken?: string;
}
export declare class UserNotificationMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    category?: keyof typeof SortOrder;
    isRead?: keyof typeof SortOrder;
    isCleared?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    deepLink?: keyof typeof SortOrder;
    fcmToken?: keyof typeof SortOrder;
}
export declare class UserNotificationMinAggregateInput {
    id?: true;
    title?: true;
    subtitle?: true;
    content?: true;
    createdAt?: true;
    category?: true;
    isRead?: true;
    isCleared?: true;
    userId?: true;
    deepLink?: true;
    fcmToken?: true;
}
export declare class UserNotificationMinAggregate {
    id?: number;
    title?: string;
    subtitle?: string;
    content?: string;
    createdAt?: Date | string;
    category?: keyof typeof UserNotificationCategory;
    isRead?: boolean;
    isCleared?: boolean;
    userId?: string;
    deepLink?: string;
    fcmToken?: string;
}
export declare class UserNotificationMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    category?: keyof typeof SortOrder;
    isRead?: keyof typeof SortOrder;
    isCleared?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    deepLink?: keyof typeof SortOrder;
    fcmToken?: keyof typeof SortOrder;
}
export declare class UserNotificationOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class UserNotificationOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    category?: keyof typeof SortOrder;
    isRead?: keyof typeof SortOrder;
    isCleared?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    deepLink?: InstanceType<typeof SortOrderInput>;
    fcmToken?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof UserNotificationCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof UserNotificationAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof UserNotificationMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserNotificationMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof UserNotificationSumOrderByAggregateInput>;
}
export declare class UserNotificationOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    category?: keyof typeof SortOrder;
    isRead?: keyof typeof SortOrder;
    isCleared?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    deepLink?: InstanceType<typeof SortOrderInput>;
    fcmToken?: InstanceType<typeof SortOrderInput>;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class UserNotificationScalarWhereWithAggregatesInput {
    AND?: Array<UserNotificationScalarWhereWithAggregatesInput>;
    OR?: Array<UserNotificationScalarWhereWithAggregatesInput>;
    NOT?: Array<UserNotificationScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    subtitle?: InstanceType<typeof StringWithAggregatesFilter>;
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    category?: InstanceType<typeof EnumUserNotificationCategoryWithAggregatesFilter>;
    isRead?: InstanceType<typeof BoolWithAggregatesFilter>;
    isCleared?: InstanceType<typeof BoolWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    deepLink?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    fcmToken?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}
export declare class UserNotificationScalarWhereInput {
    AND?: Array<UserNotificationScalarWhereInput>;
    OR?: Array<UserNotificationScalarWhereInput>;
    NOT?: Array<UserNotificationScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    title?: InstanceType<typeof StringFilter>;
    subtitle?: InstanceType<typeof StringFilter>;
    content?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFilter>;
    isRead?: InstanceType<typeof BoolFilter>;
    isCleared?: InstanceType<typeof BoolFilter>;
    userId?: InstanceType<typeof StringFilter>;
    deepLink?: InstanceType<typeof StringNullableFilter>;
    fcmToken?: InstanceType<typeof StringNullableFilter>;
}
export declare class UserNotificationSumAggregateInput {
    id?: true;
}
export declare class UserNotificationSumAggregate {
    id?: number;
}
export declare class UserNotificationSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class UserNotificationUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<UserNotificationCreateWithoutUserInput>;
    connectOrCreate?: Array<UserNotificationCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof UserNotificationCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
}
export declare class UserNotificationUncheckedCreateWithoutUserInput {
    id?: number;
    title: string;
    subtitle: string;
    content: string;
    createdAt?: Date | string;
    category: keyof typeof UserNotificationCategory;
    isRead?: boolean;
    isCleared?: boolean;
    deepLink?: string;
    fcmToken?: string;
}
export declare class UserNotificationUncheckedCreateInput {
    id?: number;
    title: string;
    subtitle: string;
    content: string;
    createdAt?: Date | string;
    category: keyof typeof UserNotificationCategory;
    isRead?: boolean;
    isCleared?: boolean;
    userId: string;
    deepLink?: string;
    fcmToken?: string;
}
export declare class UserNotificationUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<UserNotificationCreateWithoutUserInput>;
    connectOrCreate?: Array<UserNotificationCreateOrConnectWithoutUserInput>;
    upsert?: Array<UserNotificationUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof UserNotificationCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
    update?: Array<UserNotificationUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<UserNotificationUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<UserNotificationScalarWhereInput>;
}
export declare class UserNotificationUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserNotificationUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserNotificationUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserNotificationUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserNotificationUpdateManyMutationInput {
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserNotificationUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof UserNotificationScalarWhereInput>;
    data: InstanceType<typeof UserNotificationUpdateManyMutationInput>;
}
export declare class UserNotificationUpdateManyWithoutUserNestedInput {
    create?: Array<UserNotificationCreateWithoutUserInput>;
    connectOrCreate?: Array<UserNotificationCreateOrConnectWithoutUserInput>;
    upsert?: Array<UserNotificationUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof UserNotificationCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
    update?: Array<UserNotificationUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<UserNotificationUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<UserNotificationScalarWhereInput>;
}
export declare class UserNotificationUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
    data: InstanceType<typeof UserNotificationUpdateWithoutUserInput>;
}
export declare class UserNotificationUpdateWithoutUserInput {
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserNotificationUpdateInput {
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutUserNotificationsNestedInput>;
}
export declare class UserNotificationUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
    update: InstanceType<typeof UserNotificationUpdateWithoutUserInput>;
    create: InstanceType<typeof UserNotificationCreateWithoutUserInput>;
}
export declare class UserNotificationWhereUniqueInput {
    id?: number;
    AND?: Array<UserNotificationWhereInput>;
    OR?: Array<UserNotificationWhereInput>;
    NOT?: Array<UserNotificationWhereInput>;
    title?: InstanceType<typeof StringFilter>;
    subtitle?: InstanceType<typeof StringFilter>;
    content?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFilter>;
    isRead?: InstanceType<typeof BoolFilter>;
    isCleared?: InstanceType<typeof BoolFilter>;
    userId?: InstanceType<typeof StringFilter>;
    deepLink?: InstanceType<typeof StringNullableFilter>;
    fcmToken?: InstanceType<typeof StringNullableFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class UserNotificationWhereInput {
    AND?: Array<UserNotificationWhereInput>;
    OR?: Array<UserNotificationWhereInput>;
    NOT?: Array<UserNotificationWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    title?: InstanceType<typeof StringFilter>;
    subtitle?: InstanceType<typeof StringFilter>;
    content?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFilter>;
    isRead?: InstanceType<typeof BoolFilter>;
    isCleared?: InstanceType<typeof BoolFilter>;
    userId?: InstanceType<typeof StringFilter>;
    deepLink?: InstanceType<typeof StringNullableFilter>;
    fcmToken?: InstanceType<typeof StringNullableFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class UserNotification {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    createdAt: Date;
    category: keyof typeof UserNotificationCategory;
    isRead: boolean;
    isCleared: boolean;
    userId: string;
    deepLink: string | null;
    fcmToken: string | null;
    user?: InstanceType<typeof User>;
}
